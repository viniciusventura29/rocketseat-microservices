import { SendNotifications } from "./send-notification"
import { InMemoryNotificationsRepository } from "../../../test/repositories/in-memory-notifications-repositories"

describe("Send Notifications",()=>{
    it("should be able to send a notification", async ()=>{
        const notificationsRepository = new InMemoryNotificationsRepository()
        const sendNotification = new SendNotifications(notificationsRepository)

        const { notification } = await sendNotification.execute({
            content: "This is a notification",
            category: "Social",
            recipientId: "UUID-EXEMPLE"
        })


        expect(notificationsRepository.notifications).toHaveLength(1);
        expect(notificationsRepository.notifications[0]).toEqual(notification)
    })
})