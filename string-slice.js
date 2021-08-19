
// split 
const line = 'sonar Bangla Amar Na';
const letters = line.split('');
const words = line.split(' ')
const withoutA = line.split('a');
// console.log(withoutA)
// console.log('words', words);

// slice 
const smallSlice = line.slice(5, 14);
// console.log(smallSlice);

// substr 
const sub = line.substr(6, 7)
// console.log(sub)

// substring 
const anotherPart = line.substring(6, 14)
// console.log(anotherPart)

// concat 
const first = 'amader';
const second = 'city';
// const fullString = first + second;
const fullString = first.concat(second).concat('abc ').concat('who are abc')
// console.log(fullString)

// join
const join = ['alim', 'balim', 'salin'];
// const joined = join.join('')
// const joined = join.join(' ')
// const joined = join.join(',')
const joined = join.join(', ')
console.log(joined);
