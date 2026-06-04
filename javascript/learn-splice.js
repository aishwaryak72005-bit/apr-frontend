//example 1

let arr1 = [1, 2, 3, 4];
arr1.splice(1, 2);
console.log(arr1);

//example 2

let arr2 = [1, 2, 4];
arr2.splice(2, 0, 3);
console.log(arr2);

//example 3

let arr3 = [1, 2, 3];
arr3.splice(1, 1, 99);
console.log(arr3);

/*Remove: splice(index, count)
Insert: splice(index, 0(delete count), value)
Replace: splice(index, 1(delete count), newValue) */
