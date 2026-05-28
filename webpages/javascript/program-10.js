//program  to find frequency of a character
let city = "Bangalore";
let freq = {};
for (let char of city) {
  console.log(char);
  freq[char] = (freq[char] || 0) + 1;
}
console.log(freq);
