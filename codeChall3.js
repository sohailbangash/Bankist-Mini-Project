// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const calcAverageHumanAge = ages =>
    ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4)).filter(age => age >= 18);

const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

return average;
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

<<<<<<< HEAD
console.log(avg1, avg2);
=======
console.log(avg1, avg2);

>>>>>>> 1a200df (first commit)
