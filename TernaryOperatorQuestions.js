// Ternary Operator Questions


// Write a ternary expression to check if a number is even or odd.
// let num = 10;
// console.log(num % 2 === 0 ? "Even" : "Odd");


// Use the ternary operator to find the maximum between two numbers.
// let a = 5, b = 10;
// console.log(a > b ? a : b);

// Write a ternary expression to check if a person is eligible to vote (age ≥ 18)
// let age = 20;
// console.log(age >= 18 ? "Eligible to vote" : "Not eligible");

// Use the ternary operator to find the absolute value of a number.
// let value = -7;
// console.log(value >= 0 ? value : -value);

// Write a ternary expression to assign grades based on marks:
// marks >= 90 → "A"
// marks >= 75 → "B"
// marks >= 50 → "C"
// Otherwise → "Fail"
// let marks = 85;
// console.log(marks >= 90 ? "A" : marks >= 75 ? "B" : marks >= 50 ? "C" : "Fail");

// Use a nested ternary operator to find the smallest of three numbers.
// let x = 3, y = 7, z = 1;
// console.log(x < y ? (x < z ? x : z) : (y < z ? y : z));

// Write a ternary expression to check if a year is a leap year.
// let year = 2024;
// console.log(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) ? "Leap Year" : "Not a Leap Year");

// Use the ternary operator to determine whether a given character is a vowel or consonant.
// let char = 'e';
// console.log("aeiouAEIOU".includes(char) ? "Vowel" : "Consonant");

// Implement a ternary operator that checks if a number is positive, negative, or zero.
// let number = -5;
// console.log(number > 0 ? "Positive" : number < 0 ? "Negative" : "Zero");

// Convert a given numerical day (1-7) into a string representing the day of the week using the ternary operator.
// let day = 3;
// console.log(day === 1 ? "Sunday" : day === 2 ? "Monday" : day === 3 ? "Tuesday" : day === 4 ? "Wednesday" : day === 5 ? "Thursday" : day === 6 ? "Friday" : "Saturday");











// Print the day of the week when given a number (1-7)

// let dayNum = 4;
// switch (dayNum) {
//   case 1: console.log("Sunday"); break;
//   case 2: console.log("Monday"); break;
//   case 3: console.log("Tuesday"); break;
//   case 4: console.log("Wednesday"); break;
//   case 5: console.log("Thursday"); break;
//   case 6: console.log("Friday"); break;
//   case 7: console.log("Saturday"); break;
//   default: console.log("Invalid day");
// }
// Check for vowels (a, e, i, o, u)

// let vowel = 'o';
// switch (vowel.toLowerCase()) {
//   case 'a': case 'e': case 'i': case 'o': case 'u':
//     console.log("Vowel");
//     break;
//   default:
//     console.log("Consonant");
// }
// *Perform basic arithmetic operations (+, -, , /)

// let op = '*', num1 = 8, num2 = 4;
// switch (op) {
//   case '+': console.log(num1 + num2); break;
//   case '-': console.log(num1 - num2); break;
//   case '*': console.log(num1 * num2); break;
//   case '/': console.log(num1 / num2); break;
//   default: console.log("Invalid operator");
// }
// Display the number of days in a given month (1-12)

// let month = 2;
// switch (month) {
//   case 1: case 3: case 5: case 7: case 8: case 10: case 12:
//     console.log("31 days"); break;
//   case 4: case 6: case 9: case 11:
//     console.log("30 days"); break;
//   case 2:
//     console.log("28 or 29 days");
//     break;
//   default:
//     console.log("Invalid month");
// }
// Convert marks (0-100) into letter grades (A, B, C, D, F)

// let mark = 88;
// switch (true) {
//   case mark >= 90: console.log("A"); break;
//   case mark >= 75: console.log("B"); break;
//   case mark >= 50: console.log("C"); break;
//   default: console.log("Fail");
// }
// Determine whether a character is an uppercase letter, lowercase letter, digit, or special character

// let character = 'Z';
// switch (true) {
//   case /[A-Z]/.test(character): console.log("Uppercase Letter"); break;
//   case /[a-z]/.test(character): console.log("Lowercase Letter"); break;
//   case /[0-9]/.test(character): console.log("Digit"); break;
//   default: console.log("Special Character");
// }
// Convert a numerical month (1-12) into the corresponding season

// let seasonMonth = 11;
// switch (true) {
//   case [12, 1, 2].includes(seasonMonth): console.log("Winter"); break;
//   case [3, 4, 5].includes(seasonMonth): console.log("Spring"); break;
//   case [6, 7, 8].includes(seasonMonth): console.log("Summer"); break;
//   case [9, 10, 11].includes(seasonMonth): console.log("Autumn"); break;
//   default: console.log("Invalid month");
// }
// Simulate a basic menu-driven program (e.g., ATM options: Withdraw, Deposit, Check Balance)

// let option = 2;
// switch (option) {
//   case 1: console.log("Withdraw"); break;
//   case 2: console.log("Deposit"); break;
//   case 3: console.log("Check Balance"); break;
//   default: console.log("Invalid Option");
// }
// Determine whether a triangle is Equilateral, Isosceles, or Scalene based on its side lengths

// let side1 = 5, side2 = 5, side3 = 5;
// switch (true) {
//   case side1 === side2 && side2 === side3:
//     console.log("Equilateral"); break;
//   case side1 === side2 || side2 === side3 || side1 === side3:
//     console.log("Isosceles"); break;
//   default:
//     console.log("Scalene");
// }
// *Evaluate a calculator-like system that supports multiple operations (+, -, , /, %, ^ for power, and sqrt for square root)

// let calcOp = '^', n1 = 3, n2 = 4;
// switch (calcOp) {
//   case '+': console.log(n1 + n2); break;
//   case '-': console.log(n1 - n2); break;
//   case '*': console.log(n1 * n2); break;
//   case '/': console.log(n1 / n2); break;
//   case '%': console.log(n1 % n2); break;
//   case '^': console.log(Math.pow(n1, n2)); break;
//   case 'sqrt': console.log(Math.sqrt(n1)); break;
//   default: console.log("Invalid operation");
// }