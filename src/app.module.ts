import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { UsersController } from './controllers/users.controller';
import { FilesController } from './controllers/files.controller';
import { StorageService } from './services/storage.service';

@Module({
  controllers: [AppController, UsersController, FilesController],
  providers: [StorageService],
})
export class AppModule {}
