//spread operator:its is used to combine the array or object[... is spread operator]
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
//const result = [...numbers1, ...numbers2];
const result = [...numbers1, 40, 50, ...numbers2];
console.log(result);

const fruits = ["Apple", "Mango", "Orange"];
const copiedFruits = [...fruits];
console.log(copiedFruits);

//obj
const employee = {
  name: "David",
  role: "code",
};
const copiedEmployee = {
  ...employee,
};
console.log(copiedEmployee);

