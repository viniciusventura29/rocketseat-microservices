import { NotificationsRepositories } from "src/application/repositories/notifications-repositories"

const notifications: Notification[] = []

class InMemoryNotificationsRepository = {
    async create(notification: Notification){
        notifications.push(notifications)
    }
}