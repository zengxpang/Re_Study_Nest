import { Module } from '@nestjs/common';
import { MicroserviceUserController } from './microservice-user.controller';
import { MicroserviceUserService } from './microservice-user.service';

@Module({
  imports: [],
  controllers: [MicroserviceUserController],
  providers: [MicroserviceUserService],
})
export class MicroserviceUserModule {}
