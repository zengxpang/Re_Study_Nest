import { SetMetadata } from '@nestjs/common';

export const CustomA = (...args: string[]) => SetMetadata('custom-a', args);
