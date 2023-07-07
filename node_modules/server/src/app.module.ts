import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { DropboxModule } from "./dropbox/dropbox.module";
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'client', 'dist', 'client'),
    }),

    ConfigModule.forRoot({
    }),

    DropboxModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
