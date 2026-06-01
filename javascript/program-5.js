function isAnagram(str1, str2) {
  let value1 = str1.split("").sort().join("");
  let value2 = str2.split("").sort().join("");
  return value1 == value2;
}
let op = isAnagram("abc", "bca");
console.log("value", op);
