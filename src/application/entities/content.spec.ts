import { Content } from './content';
import { Notification } from './notification'

describe('Notification Content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('Você recebeu uma notificação');

    expect(content).toBeTruthy();
  });

  it('should not to be able to create a notification content with less than 4 characters', () => {
    expect(() => new Content('Oi')).toThrow();
  });

  it('should not to be able to create a notification content with more than 240 characters', () => {
    expect(() => new Content('Oi'.repeat(121))).toThrow();
  });
});

describe("Notification", ()=>{
    it("It should be able to create a notification",()=>{
        const notification = new Notification({
            content: new Content("Você recebeu uma notificação"),
            category: "Social",
            recipientId: "Exemple-recipient-UID",
        })

        expect(notification).toBeTruthy();
    })
})