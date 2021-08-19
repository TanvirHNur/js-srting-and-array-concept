const myFavDate = new Date('1971-12-16');
// console.log(myFavDate)
const newDate = new Date(1971,5,4,10,20,30,80)
// console.log(newDate);
if(myFavDate.getTime() > newDate.getTime()){
    console.log('fav')
}
