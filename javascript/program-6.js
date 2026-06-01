let arr = [1,2,2,3,4,5,5,5];
function printUniq(ar){
    let removeDuplicates = [];
    for(let i = 0;i < ar.length;i++){
        if(removeDuplicates.indexOf(ar[i])== -1){
            removeDuplicates.push(ar[i]);
        }
    }
    return removeDuplicates;
}
let uniqValue = printUniq(arr)
console.log(uniqValue)