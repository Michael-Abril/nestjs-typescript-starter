import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! GHAPP-P1-KEY-1783014630';
  }
}
