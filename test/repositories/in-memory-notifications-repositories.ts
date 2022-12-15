import { NotificationsRepositories } from "src/application/repositories/notifications-repositories"
import { Notification } from "src/application/entities/notification"



export class InMemoryNotificationsRepository implements NotificationsRepositories{

    public notifications: Notification[] = []

    async create(notification: Notification){
        this.notifications.push(notification)
    }
}
