import { Injectable } from '@nestjs/common';

@Injectable()
export class CdnService {
  constructor() {
    console.log('CdnService instantiated');
  }
}
