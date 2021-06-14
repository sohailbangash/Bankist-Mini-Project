'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

let arr = ['a', 'b', 'c', 'd'];
console.log(arr.slice(2));
console.log(arr.slice(-1));
console.log(arr.slice(2, 4));
console.log(arr.slice(1, -1));
console.log(arr.slice());
console.log([...arr]);

// splice

arr.splice(-1);
console.log(arr);

// Reverse

arr = ['a', 'b', 'c', 'd'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// concat

const letters = arr.concat(arr2);
console.log(letters);

console.log([...arr, ...arr2]);

// join

console.log(letters.join('-'));

// Loops

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
    if (movement > 0) {
        console.log(`Your Movement :${i + 1} You deposited ${movement}`);
    } else {
        console.log(`Your Movement :${i + 1} You withdraw ${Math.abs(movement)}`);
    }
}

console.log('---- For Each Loop ------');

movements.forEach(function(mov, i, arr) {
    if (mov > 0) {
        console.log(`Your Movement :${i + 1}  You deposited ${mov}`);
    } else {
        console.log(`Your Movement :${i + 1} You withdraw ${Math.abs(mov)}`);
    }
});

console.log('---- Maps method ------');

// Maps

const eurToUsd = 1.1;

// const movementsUSD = movements.map(function(mov) {
//     return mov * eurToUsd;
//     // return 23;
// });

const movementsUSD = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);

// using for loop
const movementUSDFor = [];
let mov;
for (mov of movements) {
    movementUSDFor.push(mov * eurToUsd);
}
console.log(movementUSDFor);

// const movementDescription = movements.map((mov, i) => {
//     if (mov > 0) {
//         return `Your Movement :${i + 1} You deposited ${mov}`;
//     } else {
//         return `Your Movement :${i + 1} You withdraw ${Math.abs(mov)}`;
//     }
// });

const movementDescription = movements.map(
    (mov, i) =>
    `Your Movement :${i + 1} You ${mov > 0 ? 'You deposited' : 'You withdraw'}  
  ${Math.abs(mov)}`
);

console.log(movementDescription);

console.log('---- Filter termethod ------');

// Filter

// const deposit = movements.filter(function(mov) {
//     return mov > 0;
// });
const deposit = movements.filter(mov => mov > 0);

console.log(deposit);
console.log(movements);

// For loop way
const depositFor = [];

for (const mov of movements) {
    if (mov > 0) depositFor.push(mov);
}
console.log(depositFor);

const withdrawal = movements.filter(mov => mov < 0);

console.log(withdrawal);

console.log('---- Reduce method ------');

// Reduce

// const balance = movements.reduce(function(acc, curr, i, arr) {
//     console.log(`Iteration: ${i} is ${acc}`);
//     return acc + curr;
// }, 0);

const balance = movements.reduce((acc, curr) => acc + curr, 0);

console.log(balance);

// using for Loop

let balance2 = 0;
for (const mov of movements) {
    balance2 += mov;
}
console.log(balance2);

// using call back function

// const eurToUsd = 1.1;

// Pipeline
const totalDepositsUSD = movements
    .filter(mov => mov > 0)
    .map(mov => mov * eurToUsd)
    .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);

console.log('---- Array Method Practice ------');
/******************* Array Method Practice ******************/

// 1:

// const bankDepositSum = accounts.map(acc => acc.movements).flat();
const bankDepositSum = accounts
    .flatMap(acc => acc.movements)
    .filter(mov => mov > 0)
    .reduce((sum, curr) => sum + curr, 0); // New Way
console.log(bankDepositSum);

// 2:
// const numDeposits10000 = accounts
//     .flatMap(acc => acc.movements)
//     .filter(mov => mov >= 1000).length;
// console.log(numDeposits10000);

const numDeposits1000 = accounts
    .flatMap(acc => acc.movements)
    .reduce((count, curr) => (curr >= 1000 ? count + 1 : count), 0);
console.log(numDeposits1000);

let a = 10;
console.log(++a); //  this is increase 1 in current time
console.log(a++); //  this is not increate in current time after print a this is increase
console.log(a);

// /******/ 3:

const { deposits, withdrawals } = accounts
    .flatMap(acc => acc.movements)
    .reduce(
        (sums, cur) => {
            // cur > 0 ? (sums.deposit += cur) : (sums.withdrawal += cur);

            sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
            return sums;
        }, { deposits: 0, withdrawals: 0 }
    );

console.log(deposits, withdrawals);

// 4: /*

// this is nice title --- (This Is Nice title)

const capti = function(title) {
    const firstCapt = str => str[0].toUpperCase() + str.slice(1);

    const expections = [
        'a',
        'an',
        'the',
        'but',
        'and',
        'or',
        'on',
        'with',
        'in',
        'is',
    ];
    const titleCase = title
        .toLowerCase()
        .split(' ')
        .map(word => (expections.includes(word) ? word : firstCapt(word)))
        .join(' ');
    return firstCapt(titleCase);
};
const cap1 = capti('this is nice title');
const cap2 = capti('this is LONG title but not too long');
const cap3 = capti('and here is another title with an EXAMPLE');
console.log(cap1);
console.log(cap2);
console.log(cap3);