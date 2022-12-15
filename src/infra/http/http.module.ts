import { Module } from '@nestjs/common';
import { SendNotifications } from 'src/application/use-cases/send-notification';
import { databaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/NotificationsController';

@Module({
  imports: [databaseModule],
  controllers: [NotificationsController],
  providers: [SendNotifications]
})
export class httpModule {}
