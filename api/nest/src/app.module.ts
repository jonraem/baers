import { Module } from '@nestjs/common';
import { BaersController } from './modules/baers/baers.controller';
import { BaersService } from './modules/baers/baers.service';

@Module({
  imports: [],
  controllers: [BaersController],
  providers: [BaersService],
})
export class AppModule {}
