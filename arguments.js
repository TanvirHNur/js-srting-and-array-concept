function addNumbers (num1, num2){
    // console.log(arguments)
    let result = 0;
    for(const num of arguments){
            result = result +num;
    }
    
    return result;
}

const numbers = addNumbers(30,30, 2000,3000);
// console.log(numbers)

function getFullName (firstName, secondName){
    let fullname = '';
    for (const name of arguments){
        fullname = fullname + name + ' ';
    }
    // const fullName = firstName + ' ' + secondName
    return fullname;
}
const name = getFullName('hanif', 'mia', 'bin' , 'kasem', 'bin', 'josim', 'bin', 'rofiq', 'bin', 'hanif');
console.log(name);

