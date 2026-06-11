//interview question what is destructing
//extracting data from the collected values
//without destructring
/* const colors = ["Red", "Green", "Blue"]; */
/* const first = colors[0]; */
/* const second = colors[1]; */
/* const third = colors[2]; */
/* console.log(first); */
/* console.log(second); */
/* console.log(third); */
//with destuctring
const colorsD = ["Red", "Green", "Blue"];
const [first, second, third] = colorsD;
console.log(first);
console.log(second);
console.log(third);

const employeeD = {
  name: "David",
  role: "Code",
  company: "ABC",
};
const { name, role, company } = employeeD;
console.log(name);
console.log(role);
console.log(company);

let arr = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
let result = arr.concat(arr2);
console.log(result);
