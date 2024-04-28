import { Injectable } from '@nestjs/common';
import { CdnService } from 'src/cdn/cdn.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { EditCertificate, NewCertificate } from './certificate.entity';

@Injectable()
export class CertificateService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly cdn: CdnService,
  ) {}

  async getCertificates() {
    return this.prisma.certificate.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async getCertificate({ id }: { id: string }) {
    return this.prisma.findCertificate({ id });
  }

  async createCertificate(
    { data }: { data : NewCertificate },
  ) {
    try {
      const newCertificate = data;
      const certificate = await this.prisma.createCertificate({ data: newCertificate });

      return certificate;
    } catch (err) {
      const { message } = err as Error;
      throw new Error(message);
    }
  }

  async updateCertificate(
    { data }: { data: EditCertificate },
  ) {
    try {
      const certificate = await this.prisma.updateCertificate({
        data,
      });

      return certificate;
    } catch (err) {
      const { message } = err as Error;
      throw new Error(message);
    }
  }

  async deleteCertificate({ id }: { id: string }) {
    return this.prisma.deleteCertificate({ id });
  }
}
