/*Opertors 
Arthimetic operators:+ ,-,*,/,%.**.++,--
Assignmnet:+=,-=,*=,/=,%=,**=
Camparision:==, != , 
Logical operators
Ternary */

//Arthimetic operators
let val = 3;
val--;
console.log(val);

//Assignmnet +=,-=,*=,/=,%=,**=
let num = 10;
num += 2; //num = num+2
num -= 5; //num = num - 5
num *= 2; // num = num*2
num /= 2; //num = num/2
num %= 5; //num = num%5
num **= 2; //num = num**2
console.log(num);

//Camparision
console.log(6 == 6);
console.log(7 != 7);
console.log(12 == "12");
console.log(12 === "12");
console.log(12 != "12");
console.log(12 !== "12");
console.log(5 > 2);
console.log(5 < 2);
console.log(5 >= 2);
console.log(5 <= 2);

//logical operators
console.log(!false);
console.log(5 > 2 && 7 > 2);
console.log(5 > 2 && 2 > 1);
console.log(5 > 1 || 2 < 1);
