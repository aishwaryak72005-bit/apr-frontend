//no of occurenace of letter e
let para = " i live in bangalore"
let newvalue =para.split("");
let count = 0;
for(let i=0;i<=newvalue.length;i++){
    if(newvalue[i] == "e"){
        count++;
    }
}
console.log("occurence of e is",count);
