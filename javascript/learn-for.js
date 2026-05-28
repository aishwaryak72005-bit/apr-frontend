//arr,str:for of loop iterate through single value
let arr = [1, 2, 3, 4];
for (let val of arr) {
  console.log(val);
}

let str = "Bangalore";
for (let char of str) {
  console.log(char);
}

//obj:for in loop
let obj = {
  name: "David",
  city: "Bangalore",
};

for (let key in obj) {
  console.log(key + ":" + obj[key]);
}

//program  to find frequency of a character
let city = "Bangalore";
let freq = {};
for (let char of city) {
    console.log(char)
  freq[char] = (freq[char] || 0) + 1;
}
console.log(freq);
