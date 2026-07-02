import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! GHAPP-P2-PRIVATE-1783018239';
  }
}
