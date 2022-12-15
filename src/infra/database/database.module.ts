import { PrismaService } from "./prisma/prisma.service";
import { Module } from '@nestjs/common'
import { NotificationsRepositories } from "src/application/repositories/notifications-repositories";
import { PrismaNotificationRepository } from "./prisma/repositories/prisma-notifications-repository";

@Module({
    providers:[PrismaService,{
        provide: NotificationsRepositories,
        useClass: PrismaNotificationRepository
    }],
    exports:[NotificationsRepositories]
})
export class databaseModule{}