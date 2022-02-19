import { Controller, Get } from '@nestjs/common';
import { BaersService } from './baers.service';

@Controller()
export class BaersController {
  constructor(private readonly baersService: BaersService) {}

  @Get()
  getBaers(): string {
    return this.baersService.getBaers();
  }
}
