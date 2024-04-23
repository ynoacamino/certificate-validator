import { Controller, Get } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Controller('uuid')
export class UuidController {
  @Get()
  getUuid() {
    return { uuid: uuidv4() };
  }
}
