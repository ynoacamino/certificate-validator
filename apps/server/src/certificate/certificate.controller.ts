import {
  Body, Controller, Post, UploadedFile, UseInterceptors,
} from '@nestjs/common';
import z from 'zod';
import { FileInterceptor } from '@nestjs/platform-express';
import { CdnService } from 'src/cdn/cdn.service';
import { CertificateService } from './certificate.service';
import { EditCertificate, certificateSchema, editCertificateSchema } from './certificate.entity';

@Controller('certificate')
export class CertificateController {
  constructor(
    private readonly certificateService: CertificateService,
    private readonly cdnService: CdnService,
  ) {}

  @Post('validate')
  get(@Body() body: { id: string }) {
    const schema = z.object({ id: z.string() });

    const { id } = schema.parse(body);
    return this.certificateService.getCertificate({ id });
  }

  @Post('create')
  @UseInterceptors(FileInterceptor('file'))
  async create(
  @UploadedFile() file: Express.Multer.File,
    @Body() body: unknown,
  ) {
    try {
      const data = certificateSchema.parse(body);

      const { url } = await this.cdnService.uploadFile({ file });

      if (!url) throw new Error('Error uploading image');

      return await this.certificateService.createCertificate({ data: { ...data, image: url } });
    } catch (err) {
      return {
        error: err,
      };
    }
  }

  @Post('update')
  @UseInterceptors(FileInterceptor('file'))
  async update(
  @UploadedFile() file: Express.Multer.File,
    @Body() body: EditCertificate,
  ) {
    try {
      const data = editCertificateSchema.parse(body);

      const { url } = await this.cdnService.uploadFile({ file });

      if (!url) throw new Error('Error uploading image');

      return await this.certificateService.updateCertificate({ data: { ...data, image: url } });
    } catch (err) {
      return {
        error: err,
      };
    }
  }

  @Post('delete')
  delete(@Body() body: { id: string }) {
    const schema = z.object({ id: z.string() });

    const { id } = schema.parse(body);
    return this.certificateService.deleteCertificate({ id });
  }
}
