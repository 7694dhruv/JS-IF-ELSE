// 1 to 10 set C
// number positive,negative,zero
// let n=prompt("Enter a number:");

// if(n>=0){
//     if(n==0){
//         console.log("zero");
//     }
//     else{
//         console.log("positive");
//     }
// }
// else{
//     console.log("negative")
// }

// leap year or not
// let year = prompt("Enter a leap year:");

// if (year % 4 == 0) {
//     if (year % 100 != 0) {
//         console.log("Leap year");
//     }
//     else {
//         if (year % 400 == 0) {
//             console.log("Leap year");
//         }
//         else {
//             console.log("Not Leap year")
//         }
//     }
// }
// else {
//     console.log("Not Leap year")
// }

// persons age group
// let age=prompt("Enter the age:");

// if(age>=0){
//     if(age<=12){
//         console.log("child")
//     }
//     else if(age<=19){
//         console.log("teenager");
//     }
//     else{
//         console.log("adult");
//     }
// }
// else{
//     console.log("Invalid");
// }

// check if a triangle is equilateral, isosceles, or scalene.
// let side1=parseFloat(prompt("Enter side 1:"));
// let side2=parseFloat(prompt("Enter side 2:"));
// let side3=parseFloat(prompt("Enter side 3:"));

// if(side1+side2+side3==180){
//     if(side1==side2 && side2==side3){
//         console.log("Equilateral Triangle");
//     }
//     else{
//         if(side1!=side2 && side2!=side3){
//             console.log("Scalene Triangle");
//         }
//         else{
//             console.log("Isosceles Triangle");
//         }
//     }
// }
// else{
//     console.log("Enter valid degree for triangle");
// }

// pass,fail,distinction
// let marks=prompt("Enter the marks:")

// if(marks>=40){
//     if(marks>=80){
//         console.log("Distinction");
//     }
//     else{
//         console.log("Pass");
//     }
// }
// else{
//     console.log("Fail");
// }

// character is uppercase, lowercase, or a digit.
// let letter = prompt("Enter a letter:");

// if (letter >= 'a' && letter <= 'z') {

//     console.log("Lowercase");
// }
// else {
//     if (letter >= 'A' && letter <= 'Z') {
//         console.log("Uppercase");
//     }
//     else {
//         console.log("Digit");
//     }
// }

// // divisible by both 3 and 5, only 3, or only 5.
// let n=prompt("Enter a number:");

// if(n%15==0){
//     console.log(`${n} is divisible by both 3 and 5`);
// }
// else{
//     if(n%3==0){
//         console.log(`${n} is divisible by 3`);
//     }
//     else if(n%5==0){
//         console.log(`${n} is divisible by 5`);
//     }
//     else{
//         console.log("Please enter valid number");
//     }
// }

// determine the largest of three numbers.
// let a=parseFloat(prompt("Enter a :"));
// let b=parseFloat(prompt("Enter b :"));
// let c=parseloat(prompt("Enter c :"));
// if(a>b){
//     if(a>c){
//         console.log("A is greatest");
//     }
//     else{
//         console.log("C is greatest");
//     }
// }
// else{
//     if(b>c){
//         console.log("B is greatest");
//     }
//     else{
//         console.log("C is greatest");
//     }
// }

//  check the grade of a student based on their marks
// let marks = prompt("Enter the marks:")
// if (marks >= 0 && marks <= 100) {
//     if (marks < 60) {
//         console.log("Fail");
//     }
//     else {
//         if (marks >= 60 && marks <= 69) {
//             console.log("D");
//         }
//         else if (marks >= 70 && marks <= 79) {
//             console.log("C");
//         }
//         else if (marks >= 80 && marks <= 89) {
//             console.log("B");
//         }
//         else {
//             console.log("A");
//         }
//     }
// }
// else {
//     console.log("Enter the marks less than 100 ad greater than 0");
// }

// if a person is eligible for a loan

// let minincome=25000,income=35000,mincredit=350,credit=850;
// if(income>minincome){
//     if(credit>mincredit){
//         console.log("Loan Approved");
//     }
//     else{
//         console.log("Loan Denied");
//     }
// }
// else{
//     console.log("Loan Denied");
// }