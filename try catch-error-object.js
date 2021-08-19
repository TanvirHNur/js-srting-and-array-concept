
// TypeError
// const name = 'ami';
// name = 'tumi';
// console.log(name);


// SyntaxError
// for (let i = 0; i <10 i++){

// }
// SyntaxError: Missing initializer in const declaration
// const student;
// console.log(student.name);
// TypeError: Cannot read property 'name' of undefined
// const student = undefined;
// console.log(student.name);
// TypeError: student is not a function
// const student = undefined;
// console.log(student());

const  myName = 'tumi';

try {
    myName = 'ami';
}
catch (Error){
    console.log('geting', Error)
}
console.log(myName);