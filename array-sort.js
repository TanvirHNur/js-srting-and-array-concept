const numbers = [9,8,7,6,4,5,22,2,1,4,3,100];
const sorted = numbers.sort();
// console.log(sorted);

const friends = ['kabli', 'josim', 'nasir', 'faruk', 'zohir', 'abul', 'bokul'];
// const sortedFriends = friends.sort();
// console.log(sortedFriends) 
// const reversedFriends = sortedFriends.reverse();
// console.log(sortedFriends);
// console.log(reversedFriends)

const sortedReversedFriends = friends.sort().reverse();
console.log(sortedReversedFriends)

// number sorting fun
const bigNumbers = [23,2,44,7,67,34,90,,23,81,12,67,6,45,7,100];
const bigNumbersSorted = bigNumbers.sort(function(a,b){
    return a-b;
});
console.log(bigNumbersSorted)