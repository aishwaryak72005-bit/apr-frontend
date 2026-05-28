let str = "Hello i am attending class                  ";
function largestWord(sentence) {
  let arr = sentence.split(" ");
  let large = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > large.length) {
      large = arr[i];
    }
  }
  return large.length;
}
let value = largestWord(str);
console.log(value);

let city = "Bangalore    ";
console.log("city", city.trim().length);
