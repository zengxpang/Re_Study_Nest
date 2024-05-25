import { Module } from '@nestjs/common';
import { AllProviderController } from './all-provider.controller';
import { AllProviderService } from './all-provider.service';

@Module({
  imports: [],
  controllers: [AllProviderController],
  providers: [
    {
      provide: AllProviderService, // 指定token
      useClass: AllProviderService,
    },
    {
      provide: 'person',
      useValue: { name: '曾小胖', age: 25 },
    },
    {
      provide: 'person2',
      useFactory: () => {
        return { name: '曾小胖 + person2', age: 20 };
      },
    },
    {
      provide: 'person3',
      useFactory: (
        person: {
          name: string;
          age: number;
        },
        allProviderService: AllProviderService,
      ) => {
        return {
          person,
          desc: allProviderService.getHello(),
        };
      },
      inject: ['person', AllProviderService],
    },
    {
      provide: 'person4',
      async useFactory() {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({ name: '曾小胖', age: 20 });
          }, 5000);
        });
      },
    },
    {
      provide: 'person5',
      useExisting: 'person2', //  给person2 起个别名 叫person5。实际上调用的是person2
    },
  ],
})
export class AllProviderModule {}
