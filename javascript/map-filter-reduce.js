//filter method

let arr = [10, 20, 30, 40, 50];
let op = arr.filter((number) => number > 20);
console.log(op);

let mobile = [
  { name: "iphone", brand: "Apple", price: 100000, country: "Us" },
  { name: "galaxy", brand: "Samsung", price: 20000, country: "Korea" },
  { name: "Poco", brand: "Apple", price: 100000, country: "China" },
  { name: "iphone", brand: "Apple", price: 100000, country: "Us" },
];

let filteredData = mobile.filter((value) => value.brand != "Apple");

let transaction = [
  { status: "FAILED", product: "phone", value: 2000 },
  { status: "SUCCESS", product: "Charger", value: 2000 },
  { status: "FAILED", product: "shoes", value: 3000 },
  { status: "FAILED", product: "bags", value: 5000 },
  { status: "SUCCESS", product: "watch", value: 2000 },
  { status: "SUCCESS", product: "iphone", value: 2000 },
];

let finOp = transaction.filter((value) => value.status == "SUCCESS");
console.log(finOp);

let company = ["Apple", "Microsoft", "NVdia", "Adobe"];
company.splice(1, 0, "OpenAI", "Claude");
console.log(company);

//map method
let arr1 = [20, 30, 40];
let value = arr1.map((num) => num * 2);
console.log(value);

let transaction1 = [
  { status: "FAILED", product: "phone", value: 2000 },
  { status: "SUCCESS", product: "Charger", value: 2000 },
  { status: "FAILED", product: "shoes", value: 3000 },
  { status: "FAILED", product: "bags", value: 5000 },
  { status: "SUCCESS", product: "watch", value: 2000 },
  { status: "SUCCESS", product: "iphone", value: 2000 },
];

let mapOP = transaction1.map(
  (value) => `product is ${value.product} amount ${value.value}`,
);
console.log(mapOP);

let mobiles = [
  { name: "iphone", brand: "Apple", price: 100000, country: "Us" },
  { name: "galaxy", brand: "Samsung", price: 20000, country: "Korea" },
  { name: "Poco", brand: "Apple", price: 100000, country: "China" },
  { name: "iphone", brand: "Apple", price: 100000, country: "Us" },
];

let mapData = mobiles.map((value) => console.log("value data", value));

//reduce method
let scores = [72, 65, 92, 35, 92, 90];
let final = scores.reduce((acc, value) => acc + value, 0);
//second arguments holds accumulator intial value
console.log("total score", final);

let mobile2 = [
  { name: "iphone", brand: "Apple", price: 100000, country: "Us" },
  { name: "galaxy", brand: "Samsung", price: 20000, country: "Korea" },
  { name: "Poco", brand: "Apple", price: 100000, country: "China" },
  { name: "iphone", brand: "Apple", price: 100000, country: "Us" },
];
let totalValue = mobile2.reduce((acc, value) => acc + value.price, 0);
console.log("total value", totalValue);
