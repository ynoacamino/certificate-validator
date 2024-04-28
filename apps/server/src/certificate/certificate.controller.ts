import {
  Body, Controller, Get, HttpStatus, Post, Res, UploadedFile, UseInterceptors,
} from '@nestjs/common';
import z from 'zod';
import { FileInterceptor } from '@nestjs/platform-express';
import { CdnService } from 'src/cdn/cdn.service';
import { Response } from 'express';
import { CLIENT_URL } from 'src/data/globalConfig';
import { CertificateService } from './certificate.service';
import { EditCertificate, certificateSchema, editCertificateSchema } from './certificate.entity';

@Controller('certificate')
export class CertificateController {
  constructor(
    private readonly certificateService: CertificateService,
    private readonly cdnService: CdnService,
  ) {}

  @Get('list')
  async list() {
    return this.certificateService.getCertificates();
  }

  @Post('validate')
  async get(@Body() body: { id: string }, @Res() res: Response) {
    const schema = z.object({ id: z.string() });

    const { id } = schema.parse(body);

    console.log({ id });
    const certificate = await this.certificateService.getCertificate({ id });

    console.log({ certificate });

    if (!certificate) {
      return res.status(HttpStatus.BAD_REQUEST).send({
        error: 'Certificate not found',
      });
    }

    return res.status(HttpStatus.OK).send(certificate);
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

      fetch(`${CLIENT_URL}/api/certificate`, {
        method: 'POST',
      })
        .then(() => console.log('revalidated'))
        .catch((err) => console.error(err));

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

      fetch(`${CLIENT_URL}/api/certificate`, {
        method: 'POST',
      })
        .then(() => console.log('revalidated'))
        .catch((err) => console.error(err));

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

    fetch(`${CLIENT_URL}/api/certificate`, {
      method: 'POST',
    })
      .then(() => console.log('revalidated'))
      .catch((err) => console.error(err));

    return this.certificateService.deleteCertificate({ id });
  }
}
