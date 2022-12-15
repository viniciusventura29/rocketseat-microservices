import { SendNotifications } from "./send-notification"
import { Notification } from "../entities/notification"

const notifications: Notification[] = []

const notificationsRepository = {
    async create(notification: Notification){
        notifications.push(notification)
    }
}

describe("Send Notifications",()=>{
    it("should be able to send a notification", async ()=>{
        const sendNotification = new SendNotifications(notificationsRepository)

        const { notification } = await sendNotification.execute({
            content: "This is a notification",
            category: "Social",
            recipientId: "UUID-EXEMPLE"
        })

        console.log(notifications)

        expect(notifications).toHaveLength(1);
    })
})