let num =4;
for (let i = 1; i <= num; i++){
    let str = "* ";
    console.log(str.repeat(i));
}

for (let i= num-1;i >=1; i--){
    let str = "* ";
    console.log(str.repeat(i))
}
for (let i= 1;i <= num; i++){
    let str = "* ";
    let space = " ";
    console.log(space.repeat(num-i)+str.repeat(i));
}

