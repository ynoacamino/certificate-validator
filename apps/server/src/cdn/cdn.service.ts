import { BlobServiceClient, StorageSharedKeyCredential } from '@azure/storage-blob';
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CDN_CONTAINER_NAME, CDN_URL } from './cdn.config';

@Injectable()
export class CdnService {
  private blobServiceClient: BlobServiceClient;

  constructor() {
    const accountName = process.env.CDN_ACCOUNT_NAME || '';
    const accountKey = process.env.CDN_ACCOUNT_KEY || '';
    const sharedKeyCredential = new StorageSharedKeyCredential(accountName, accountKey);
    this.blobServiceClient = new BlobServiceClient(`https://${accountName}.blob.core.windows.net`, sharedKeyCredential);
  }

  async uploadFile({ file }: { file: Express.Multer.File }) {
    const containerClient = this.blobServiceClient.getContainerClient(CDN_CONTAINER_NAME);

    const blobName = uuidv4();

    const blockBlobClient = containerClient.getBlockBlobClient(blobName);

    try {
      await blockBlobClient.uploadData(file.buffer, {
        blobHTTPHeaders: {
          blobContentType: file.mimetype,
        },
      });

      return {
        url: `${CDN_URL}${blobName}`,
        name: blobName,
      };
    } catch {
      throw new Error('Error uploading file');
    }
  }
}
