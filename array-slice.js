const numbers = [1,3,44,66,88,45,2334,5,5,74,94,341,54];
const numuberSlice = numbers.slice(7,10);
// console.log(numuberSlice);
// console.log(numbers) // but you have remember that orginal array does not change

// splice to romeve an Element from an Array
// const numberSpliced = numbers.splice(6, 2)
// console.log(numberSpliced);
// console.log(numbers);

const numberSpliced2 = numbers.splice(1, 0, 99,20,4);
console.log(numberSpliced2);
console.log(numbers);
