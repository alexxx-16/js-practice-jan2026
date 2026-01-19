//
// BMI CALCULATOR
// const WEIGHT = 85;
// const HEIGHT = 1.81;

// const calculateBMI = (weight, height) => weight / (height * height);
// const bmiResult = calculateBMI(WEIGHT, HEIGHT);
// let weightCategory =
//   bmiResult < 18.5 ? "Underweight" : bmiResult < 25 ? "Healthy" : "Overweight";

// console.log(
//   `Your BMI is ${calculateBMI(WEIGHT, HEIGHT).toFixed(2)} with a weight of ${WEIGHT} kg and height of ${HEIGHT} metre. You are considered ${weightCategory}.`,
// );

//
// LOVE CALCULATOR
// const love = Math.floor(Math.random() * 101);
// const message =
//   love < 30
//     ? "This is not meant to be."
//     : love < 70
//       ? "You have a chance."
//       : love < 90
//         ? "You are made for each other."
//         : "You are each other's soul mate!";
// console.log(`Your love result is ${love}%. ${message}`);

//
// LEAP YEAR
// const leapYearCalculator = (year) =>
//   (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
//     ? console.log(`Yes the year ${year} is a leap year.`)
//     : console.log(`No the year ${year} is not a leap year.`);

// leapYearCalculator(2000);
// leapYearCalculator(2100);

// const isLeapYear = (year) =>
//   (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

// const year = 2044;

// if (isLeapYear(year)) {
//   console.log(`Yes, the year ${year} is a leap year.`);
// } else {
//   console.log(`No, the year ${year} is not a leap year.`);
// }

//
//ARRAYS
// const list = ["andrew", "alex", "koko", "Indi", "Yugi"];
// const userName = "YUGi ";

// const checkName = (name) => {
//   const cleanName = name.trim();
//   const formattedName =
//     cleanName.charAt(0).toUpperCase() + cleanName.slice(1).toLowerCase();

//   const isIncluded = list
//     .map((n) => n.toLowerCase())
//     .includes(formattedName.toLowerCase());

//   console.log(
//     isIncluded
//       ? `Welcome ${formattedName}!`
//       : `Sorry ${formattedName} is not on the list.`,
//   );
// };
// checkName(userName);

//
//MORE ARRAYS
// const output = [];
// let count = 1;

// const fizzBuzz = () => {
//   if (count > 100) {
//     console.log("Max 100 reached.");
//   }
//   output.push(
//     count % 3 === 0 && count % 5 === 0
//       ? "FizzBuzz"
//       : count % 3 === 0
//         ? "Fizz"
//         : count % 5 === 0
//           ? "Buzz"
//           : count,
//   );
//   count++;
//   console.log(output);
// };

// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();

// function fizzBuzz() {
//   if (count > 100) {
//     console.log("100 reached.");
//     return;
//   }
//   if (count % 3 === 0 && count % 5 === 0) {
//     output.push("FizzBuzz");
//   } else if (count % 3 === 0) {
//     output.push("Fizz");
//   } else if (count % 5 === 0) {
//     output.push("Buzz");
//   } else {
//     output.push(count);
//   }
//   count++;
//   console.log(output);
// }

// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();

// const output = [];

// const fizzBuzz = () => {
//   for (let i = 1; i <= 100; i++) {
//     output.push(
//       i % 3 === 0 && i % 5 === 5
//         ? "FizzBuzz"
//         : i % 3 === 0
//           ? "Fizz"
//           : i % 5 === 0
//             ? "Buzz"
//             : i,
//     );
//   }
//   console.log(output);
// };
// fizzBuzz();

// const names = ["Andrew", "Alex", "Koko", "Indi", "Yugi", "Jonny"];
// const whoIsPaying = () =>
//   console.log(
//     `${names[Math.floor(Math.random() * names.length)]} is going to buy lunch today.`,
//   );

// whoIsPaying();

//
//WHILE LOOPS
// const lyrics = () => {
//   for (let i = 99; i >= 0; i--)
//     console.log(
//       i === 1
//         ? `${i} bottle of beer on the wall, ${i} bottle of beer.
// Take one down and pass it around, no more bottles of beer on the wall.`
//         : i === 0
//           ? `No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.`
//           : `${i} bottles of beer on the wall, ${i} bottles of beer.
// Take one down and pass it around, ${i - 1} ${i === 2 ? "bottle" : "bottles"} of beer on the wall.`,
//     );
// };
// lyrics();

//
//FIBONACCI
function fibonacciGenerator(n) {
  const sequence = [];
  for (let i = 0; i < n; i++) {
    i <= 1
      ? sequence.push(i)
      : sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}
console.log(fibonacciGenerator(17));
