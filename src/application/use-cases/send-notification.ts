import { Content } from '../entities/content';
import { Notification } from '../entities/notification';
import { NotificationsRepositories } from '../repositories/notifications-repositories';

interface SendNotificationsRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationResponse{
    notification : Notification
}

export class SendNotifications {

    constructor(private notificationsRepository: NotificationsRepositories){}
  async execute(request: SendNotificationsRequest): Promise<SendNotificationResponse> {
    const { recipientId, category, content } = request;
    const notification = new Notification({
      recipientId,
      category,
      content: new Content(content),
    });

    await this.notificationsRepository.create(notification)

    return { 
        notification 
    };
  }
}
