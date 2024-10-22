import { Module } from '@nestjs/common';
import { MicroserviceMainController } from './microservice-main.controller';
import { MicroserviceMainService } from './microservice-main.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USER_SERVICE',
        transport: Transport.TCP,
        options: {
          port: 8888,
        },
      },
    ]),
  ],
  controllers: [MicroserviceMainController],
  providers: [MicroserviceMainService],
})
export class MicroserviceMainModule {}
