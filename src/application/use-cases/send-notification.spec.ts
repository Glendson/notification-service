import { InMemoryNotificationsRepository } from "../../../test/repositories/in-memory-notifications-repository";
import { SendNotification } from "./send-notification";



describe('Send Notification', () => {
    it('should be able send notification', async () => {

        const notificationsRepository = new InMemoryNotificationsRepository()

        const sendNotification = new SendNotification(notificationsRepository);

        await sendNotification.execute({
            category: 'social',
            content: 'This is a notification',
            recipientId: 'example-recipient-id',
        })

        expect(notificationsRepository.notifications).toHaveLength(1);
    })
})