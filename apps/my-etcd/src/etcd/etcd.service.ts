import { Get, Inject, Injectable, Query } from '@nestjs/common';
import { Etcd3 } from 'etcd3';

@Injectable()
export class EtcdService {
  @Inject('ETCD_CLIENT')
  private readonly etcdClient: Etcd3;

  // 保存配置
  async saveConfig(key: string, value: string) {
    await this.etcdClient.put(key).value(value);
  }

  // 读取配置
  async getConfig(key: string) {
    return await this.etcdClient.get(key).string();
  }

  // 删除配置
  async deleteConfig(key: string) {
    await this.etcdClient.delete().key(key);
  }

  // 服务注册
  async registerService(
    serviceName: string,
    instanceId: string,
    metadata: Record<string, any>,
  ) {
    const key = `/services/${serviceName}/${instanceId}`;
    const lease = this.etcdClient.lease(10);
    await lease.put(key).value(JSON.stringify(metadata));
    lease.on('lost', async () => {
      console.log('租约过期，重新注册...');
      await this.registerService(serviceName, instanceId, metadata);
    });
  }

  // 服务发现
  async discoverService(serviceName: string) {
    const instances = await this.etcdClient
      .getAll()
      .prefix(`/services/${serviceName}`)
      .strings();
    return Object.entries(instances).map(([key, value]) => JSON.parse(value));
  }

  // 监听服务变更
  async watchService(serviceName: string, callback: (value: any[]) => void) {
    const watcher = await this.etcdClient
      .watch()
      .prefix(`/services/${serviceName}`)
      .create();
    watcher
      .on('put', async (event) => {
        console.log('新的服务节点添加:', event.key.toString());
        callback(await this.discoverService(serviceName));
      })
      .on('delete', async (event) => {
        console.log('服务节点删除:', event.key.toString());
        callback(await this.discoverService(serviceName));
      });
  }
}
