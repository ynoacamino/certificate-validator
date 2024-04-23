import { Module } from '@nestjs/common';
import { UuidController } from './uuid.controller';

@Module({
  controllers: [UuidController],
})
export class UuidModule {}
