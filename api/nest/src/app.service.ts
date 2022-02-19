import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getBaers(): string {
    return 'Cock Bärs';
  }
}
