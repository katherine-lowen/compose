import { Controller, Post } from '@nestjs/common';
import { StorageService } from '../services/storage.service';
import * as crypto from 'crypto';

@Controller('files')
export class FilesController {
  constructor(private storage: StorageService) {}

  @Post()
  async uploadMock() {
    const bucket = process.env.S3_BUCKET || 'intime-dev';
    try { await this.storage.client.makeBucket(bucket); } catch {}
    const key = `hello-${crypto.randomUUID()}.txt`;
    await this.storage.client.putObject(bucket, key, 'hello world');
    return { ok: true, bucket, key };
  }
}
