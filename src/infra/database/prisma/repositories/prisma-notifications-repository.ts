import { Notification } from "src/application/entities/notification";
import { Injectable } from '@nestjs/common'
import { NotificationsRepositories } from "src/application/repositories/notifications-repositories";
import { PrismaService } from "../prisma.service";

@Injectable()
export class PrismaNotificationRepository implements NotificationsRepositories{

    constructor(
        private prismaService: PrismaService
    ){}

    async create(notification: Notification): Promise<void> {
       await this.prismaService.notification.create({
        data:{
            id: notification.id,
            category: notification.category,
            content: notification.content,
            recipientId: notification.recipientId,
            readAt: notification.readAt,
            createAt: notification.createdAt
        }
       })
    }

}