class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  login() {
    console.log(`${this.name} logged in`);
  }
  logout() {
    console.log(`${this.name} looged out`);
  }
}
class Customer extends User {
  placeOrder(foodItem) {
    console.log(`${this.name} ordered ${foodItem}`);
  }
}
class DeliveryPartner extends User {
  deliverOrder(orderId) {
    console.log(`${this.name} delivered order ${orderId}`);
  }
}
class Admin extends User {
  removeRestaurant(restaurantName) {
    console.log(`${restaurantName} removed by ${this.name}`);
  }
}
const customer = new Customer("David", "abc@gmail.com");
customer.login();
customer.placeOrder("Pizza");
console.log("---------------");
const rider = new DeliveryPartner("Rahul", "abc@gmail.com");
rider.login();
rider.deliverOrder("ORD123");
console.log("----------------");
const admin = new Admin("Manager", "admin@foodapp.com");
admin.login();
admin.removeRestaurant("ABC Restaurant");
