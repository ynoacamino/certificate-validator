import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UuidModule } from './uuid/uuid.module';
import { CertificateModule } from './certificate/certificate.module';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '../../.env',
  }), UuidModule, CertificateModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
