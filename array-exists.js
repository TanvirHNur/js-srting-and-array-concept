function megaFriends (friends){
    
    if(Array.isArray(friends) == false){
       return 'Please Provide an array';
    }
    let mega = []
    for (const friend of friends){
        if(friend.length > mega.length){
            mega = friend;
    }
    }
    return mega;
}
const friends = ['sagor', 'asad', 'jalal', 'naimul', 'mahmud'];
const bigBuddy = megaFriends(2222);
console.log(bigBuddy);


// indexOf
if (friends.indexOf('jalAL'.toLowerCase()) != -1){
    console.log('jalal exists')
}
else{
    console.log("jalai doesn't")
}

// includes
if (friends.includes('Naimul'.toLowerCase())){
    console.log('yes, naimul')
}
else {
    console.log('no')
}

// concat
const first = [3, 3,4,4, 5,5]
const second   = [6,7,9,7];
const combined = first.concat(second).concat('123,34');
console.log(combined);