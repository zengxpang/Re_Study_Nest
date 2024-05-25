import { Controller, Get, Inject } from '@nestjs/common';
import { AllProviderService } from './all-provider.service';

@Controller()
export class AllProviderController {
  // constructor(private readonly allProviderService: AllProviderService) {}

  constructor(
    @Inject('person') private person: { name: string; age: number },
  ) {}

  @Inject(AllProviderService)
  private allProviderService: AllProviderService;

  // @Inject('person')
  // private person: { name: string; age: number };

  @Inject('person2')
  private person2: { name: string; age: number };

  @Inject('person3')
  private person3: { person: { name: string; age: number }; desc: string };

  @Inject('person4')
  private person4: { name: string; age: number };

  @Inject('person5')
  private person5: { name: string; age: number };

  @Get()
  getHello(): string {
    console.log(this.person5);
    return this.person2.name + this.person2.age;
  }
}
