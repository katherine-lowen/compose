import { Injectable } from '@nestjs/common';
import { Client } from 'minio';

function endpointHost() {
  const ep = process.env.S3_ENDPOINT || 'http://minio:9000';
  return ep.replace(/^https?:\/\//,'').split(':')[0] || 'minio';
}

@Injectable()
export class StorageService {
  client = new Client({
    endPoint: endpointHost(),
    port: 9000,
    useSSL: false,
    accessKey: process.env.S3_ACCESS_KEY || 'minio',
    secretKey: process.env.S3_SECRET_KEY || 'minio123',
  });
}
