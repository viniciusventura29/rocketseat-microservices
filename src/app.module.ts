import { Module } from '@nestjs/common';
import { httpModule } from './infra/http/http.module';
import { databaseModule } from './infra/database/database.module';

@Module({
  imports: [httpModule, databaseModule],
})
export class AppModule {}
