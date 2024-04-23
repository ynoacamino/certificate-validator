import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CdnModule } from 'src/cdn/cdn.module';
import { CdnService } from 'src/cdn/cdn.service';
import { CertificateService } from './certificate.service';
import { CertificateController } from './certificate.controller';

@Module({
  controllers: [CertificateController],
  providers: [CertificateService, CdnService],
  imports: [PrismaModule, CdnModule],
})
export class CertificateModule {}
