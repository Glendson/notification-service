import { SendNotification } from "./send-notification";

describe('Send Notification', () => {
    it('should be able send notification', async () => {
        const sendNotification = new SendNotification();

        const { notification } = await sendNotification.execute({
            category: 'social',
            content: 'This is a notification',
            recipientId: 'example-recipient-id',
        })

        expect(notification).toBeTruthy()
    })
})