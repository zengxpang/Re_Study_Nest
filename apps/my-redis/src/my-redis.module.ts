import { Module } from '@nestjs/common';
import { MyRedisController } from './my-redis.controller';
import { MyRedisService } from './my-redis.service';
import { createClient } from 'redis';

@Module({
  imports: [],
  controllers: [MyRedisController],
  providers: [
    MyRedisService,
    {
      provide: 'REDIS_CLIENT',
      async useFactory() {
        const client = createClient({
          socket: {
            host: 'localhost',
            port: 6379,
          },
        });
        await client.connect();
        return client;
      },
    },
  ],
})
export class MyRedisModule {}
