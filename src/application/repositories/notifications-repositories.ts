import { Notification } from "../entities/notification";

export abstract class NotificationsRepositories{
    abstract create(notification:Notification): Promise<void>;
}