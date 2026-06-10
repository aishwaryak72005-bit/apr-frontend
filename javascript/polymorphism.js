class Notification {
  send() {
    console.log("💬Messge sent");
  }
}
class EmailNotification extends Notification {
  send() {
    console.log("🔔email message");
  }
}
class SMSNotification extends Notification {
  send() {
    console.log("💬Sms Notifaction");
  }
}
class PushNotification extends Notification {
  send() {
    console.log("🔔Sending Push Notification");
  }
}
let notification = new Notification();
notification.send();
let email = new EmailNotification();
email.send();
let sms = new SMSNotification();
sms.send();
let push = new PushNotification();
push.send();
