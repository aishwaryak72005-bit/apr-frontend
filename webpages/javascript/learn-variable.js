//variables
var name = "David";
var name = "johnson";
console.log(name);

//it can be redeclared and reinitialized

//let learning

let city = "Banglore";
city = "Mysore";
console.log(city);
// let: it can't be redeclared  
// it can be reinitialzed

//const 
const area = "Bashayam circle";
//area = "Rajaji Nagar";
console.log(area);
//it can be redeclared it cann't reinitalized

{
    let month = "May";
    console.log('inside',month);
}

//console.log("outside",month);

//let is block scope outside the block we can't access the let 
{
    const month = "May";
    console.log('inside',month);
}
//console.log("outside",month);
// const ia also a block scope 

{
    var month = "May";
    console.log('inside',month);
}
console.log("outside",month);
//var is a function scope we can access anywhere 



