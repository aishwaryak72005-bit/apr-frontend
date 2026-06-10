let product = "Five Star"; //global variable // global scope
function outer() {
  let p1 = "Ramesh"; //local scope
  function inner() {
    let p2 = "Suresh"; //nested scope
    if (true) {
      let message = "add complete"; // block scope
      console.log("product name", product);
      console.log("actor 1", p1);
      console.log("actor 2", p2);
      console.log(message);
    }
    //console.log(message);
  }
  inner();
}
outer();

// sample without closure
function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log(count);
  }
  inner();
}
outer();
outer();
