class Product {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  buyProduct() {
    console.log(`product name :${this.name}
        product color: ${this.color}`);
  }
}
let value = new Product("iphone", "red");
let data = new Product("samsung", "blue");
value.buyProduct();
data.buyProduct();
