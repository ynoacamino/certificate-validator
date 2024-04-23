import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaService {
  constructor() {
    console.log('PrismaService instantiated');
  }
}
