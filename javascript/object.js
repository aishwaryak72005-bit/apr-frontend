//object
let transaction = {
  upiId: "a@axix",
  number: "1234",
};
console.log(transaction.upiId);
console.log(transaction["upiId"]);
transaction["account"] = "ICICI";
console.log(transaction);
//object methods
console.log(Object.keys(transaction));
console.log(Object.values(transaction));

let obj1 = {
  name: "David",
  age: 20,
};
let obj2 = {
  name: "Johnson",
  city: "Bangalore",
};
Object.assign(obj1, obj2);
console.log(obj1);
console.log(obj2);

//interview question
let transactions = [
  { upi: "a", number: "122", status: "SUCCESS" },
  { upi: "b", number: "123", status: "FAILURE" },
  { upi: "c", number: "124", status: "FAILURE" },
  { upi: "d", number: "125", status: "SUCCESS" },
];
console.log(transactions);
console.log(transactions.length);
for (let i = 0; i < transactions.length; i++) {
  let newArr = [];
  console.log("value is", transactions[i].status);
  if (transactions[i].status == "FAILURE") {
    newArr.push(transactions[i]);
    console.log(newArr);
  }
}


