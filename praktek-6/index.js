// * Contoh 1
// let number = 10 + '10';
// console.log(number);

// * Contoh 2
// let str = '42';
// let num = ++str; // unary operator
// console.log(num);

// * Contoh 3
// const birthYear = prompt('Tahun Berapa Kamu Lahir ?');
// const yourAge = 2024 - Number(birthYear);
// console.log(yourAge);

// * Contoh 4
// let num = 42;
// let str = String(num);
// console.log(str);

const age = 20;
const height = 167;
const weight = 60;
const isStudent = true;

// TODO: `age` to String
const ageAsString = String(age);

// TODO: `height` + " cm"
const heightAsString = height + ' cm';

// TODO: `weight` + " kg"
const weightAsString = weight + ' kg';

// TODO: `isStudent` to number
const studentStatus = Number(isStudent);

console.log(ageAsString);
console.log(typeof ageAsString + '\n');

console.log(heightAsString);
console.log(typeof heightAsString + '\n');

console.log(weightAsString);
console.log(typeof weightAsString + '\n');

console.log(studentStatus);
console.log(typeof studentStatus + '\n');
