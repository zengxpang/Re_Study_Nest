import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OtherModule } from './other/other.module';
import { GlobalOtherModule } from './global-other/global-other.module';
import { CycleAModule } from './cycle-a/cycle-a.module';
import { CycleBModule } from './cycle-b/cycle-b.module';
import { TheDynamicModule } from './the-dynamic/the-dynamic.module';
import { TheDynamic2Module } from './the-dynamic2/the-dynamic2.module';

@Module({
  imports: [
    OtherModule,
    GlobalOtherModule,
    CycleAModule,
    CycleBModule,
    TheDynamicModule.register({
      name: 'The Dynamic Module',
      description: 'This is a dynamic module',
    }),
    // TheDynamic2Module.register({
    //   name: 'The Dynamic2 Module',
    //   description: 'This is a dynamic2 module',
    // }),
    TheDynamic2Module.registerAsync({
      useFactory: async () => {
        await 111;
        return {
          name: 'The Async Dynamic2 Module',
          description: 'This is Async The dynamic2 module',
          isGlobal: true,
        };
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
