import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class EMedianService {
  @Inject(PrismaService)
  private prismaService: PrismaService;

  getHello(): string {
    return 'Hello World!';
  }
}
