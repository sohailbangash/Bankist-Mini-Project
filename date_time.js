'use strict'

// working with dates

const future = new Date(2021, 10, 19, 1, 23);

console.log(future);

console.log('Year ' + future.getFullYear());
console.log('Month '+future.getMonth());
console.log('Date '+future.getDate());
console.log('Day '+future.getDay());
console.log('Hours '+future.getHours());
console.log('Second ' +future.getSeconds());
console.log(future.toISOString());

console.log(future.getTime());
// console.log(new Date(1637266980000));

console.log(Date.now());


future.setFullYear(2020);
console.log(future);



// date with multiplation

const  future1 = new Date(2021, 10, 15, 23);
console.log(+future1);

console.log('--- date ---');

const calDaysPassed = (date1, date2) => Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calDaysPassed(new Date(2037, 3, 4), new Date(2037, 3,14));
console.log(days1);



// const formatMovementsDate = function(date){
    
//     const calDaysPassed = (date1, date2) => Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
//      const days1 = calDaysPassed(new Date(2037, 3, 4), new Date(2037, 3,14));
//      console.log(days1);

//      const daysPassed = calDaysPassed(new Date(), date);
//      console.log(daysPassed);

//      if(daysPassed === 0) return 'Today';
//      if(daysPassed === 1) return 'Yesterday';
//      if(daysPassed <= 7) return `${daysPassed} days ago`;

     

//     const days = `${date.getDate()}` .padStart(2, 0);
//     const months = `${date.getMonth()}` .padStart(2, 0);
//     const years = date.getFullYear();
//        return `${days}/${months}/${years}`;
   
//  }


// const getDaysAgo = (dateOfMovement) => { 
//     const currentDate = new Date().getTime();
//     let daysAgo = (currentDate - dateOfMovement) / 1000 / 60 / 60 / 24;
//     daysAgo = Math.trunc(daysAgo);
    
//     switch (daysAgo) {
//       case 0: return `today`;
//       case 1: return `yesterday`;
//       default: return `${daysAgo} days ago`;
//     }
//   }








