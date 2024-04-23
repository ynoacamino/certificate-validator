import { Injectable, OnModuleInit } from '@nestjs/common';
import { Certificate, PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async findCertificate({ id }: { id: string }) {
    return this.certificate.findUnique({
      where: {
        id,
      },
    });
  }

  async createCertificate({ data }: { data: Omit<Certificate, 'createdAt'> }) {
    return this.certificate.create({
      data,
    });
  }

  async updateCertificate({ data }: { data: Omit<Certificate, 'createdAt'> }) {
    return this.certificate.update({
      where: {
        id: data.id,
      },
      data: {
        name: data.name,
        lastName: data.lastName,
        title: data.title,
        image: data.image,
      },
    });
  }

  async deleteCertificate({ id }: { id: string }) {
    return this.certificate.delete({
      where: {
        id,
      },
    });
  }
}
