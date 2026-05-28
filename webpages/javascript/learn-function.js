//function declaration
//function with arugruments
function sum(a,b){
    console.log("sum is",a+b);
}
sum(5,10)

//function with return value
function sum(a,b){
    return a+b;
}
let sumvalue=sum(5,10);
console.log('sum is ',sum(5,10))

//function expression 
let sayHello = function(){
    console.log("Say Hi");
}
sayHello();

//function expression with argument
let add = function(a,b){
    console.log('sum is',a+b);
};
add(5,10);

//function expression with return value
let addvalue=function (a,b){
    
    return a+b;
}
let addition = addvalue(5,10)
console.log('added value is',addition)

