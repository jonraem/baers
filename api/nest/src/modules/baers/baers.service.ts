import { Injectable } from '@nestjs/common';

@Injectable()
export class BaersService {
  getBaers(): string {
    return 'Cock Bärs';
  }
}
