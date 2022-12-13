import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { httpModule } from './http.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [httpModule],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
