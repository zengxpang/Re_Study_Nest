import { SetMetadata } from '@nestjs/common';
import { IRole } from '../role';

export const Role = (...args: IRole[]) => SetMetadata('role', args);
