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







