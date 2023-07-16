// 1.Ways to print in JavaScript
// console.log("Hellow world");
//     alert("me");
//     console tricks
// document.getElementsByTags('h1')[0].style.background ="red"
// document.write("This is Document . write!");
//     2.Javascript console API
// console.warn("This is Warning!");
// console.error("This is an Error!");
//     cpnsole.clear(); - to clear the console

// 3. JavaScript Variables
// What ares variables? - Containers to store data values.
/*
var number1 = 34;
var number2 = 56;
console.log(number1 + number2);

/* multi
line
comments! */

//4. DataTypes in JavaScripts.
// Numbers
// var num1 = 45;
// var num2 = 54;

// Strings
// var str1 = "This is a string";
// var str2 = "This is also a string";

//Objects
// var marks = {
//   Shivam: 34,
//   Agnik: 98,
//   Ayanabha: 99.99,
// };
// console.log(marks);

// Booleans
// var a = true;
// var b = false;
// console.log(a, b);

// Undefined
// var und = undefined;
// console.log(und);
// console.log(undefined);

//null
// var n = null;
// console.log(n);

/* 
At a very high level , there are two types of data types in JavaScript
1. Primitive data types: undefined, null, number, string, boolean, symbol
2.Reference data types: Arrays and Objects
*/
/*
// Arrays
var arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr[3]);
var ar = ["Ayanabha", "Agnik", "Shivam", "Prakash", "Swrup", "Jeet", "Afsan"];
console.log(ar);
console.log(ar[2]);
console.log(ar[1]);
*/
// Operators in JavaScripts.
// Arithmatic Operators.
// var a = 100;
// var b = 10;
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
/*
// Assignment Operators.
var c = b;
// c += 2;
// c *= 2;
// c -= 2;
// c /= 2;
// console.log(c);

// Comparison Operator
// var x = 34;
// var y = 56;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);

//Logical Operator.
// Logical And- Operator
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);
// Logical Or - Operator
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);
// //Logical Not - Operator
// console.log(!true);
// console.log(!false);

// Functions in JavaScript
// DRY = Do not repeat yourself
// function avg(a, b) {
//   return (a + b) / 2;
// }
// c1 = avg(4, 1);
// c2 = avg(20, 10);
// console.log(c1, c2);
/*
//Conditionals in JavaScript
var age = 25;
//Single Statement.
// if (age < 18) {
//   console.log("You are not an adult.");
// }
// If else - Statements.
// if (age < 18) {
//   console.log("You are not an adult.");
// } else {
//   console.log("You are an adult.");
// }
//If else -Ladder.
if (age > 32) {
  console.log("You are not a kid.");
} else if (age > 26) {
  console.log("You are now an adult.");
} else if (age > 22) {
  console.log("You are  not a teeneger");
} else if (age > 18) {
  console.log("Bachhe nahi rahe!");
} else {
  console.log("Fuck you!");
}
console.log("End of ladder.");
*/

//For Loop.....
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr);

// for (var i = 0; i < arr.length + 1; i++) {
//   console.log(arr[i]);
// }
// arr.forEach(function (element) {
//   console.log(element);
// });

// const ac = 0; // const - for overwriting
// ac++;

//While Loop
// let j = 0;
// while (j < arr.length) {
//   console.log(arr[j]);
//   j++;
// }

//Do While Loop
// do {
//   console.log(arr[j]);
//   j++;
// } while (j < arr.length);

// Break - To break the itaration and end the loop.
// Continue - To ignore the current iteration and then continue the next iteration.

// let myArr = ["fan", "Camera", 78, null, true];
// Array Methords.
// console.log(myArr.length);
// myArr.pop();
// console.log(myArr);
// myArr.push("Ayanabha");
// myArr.shift();
// myArr.unshift("Sristi"); //- its also change the length.
// console.log(myArr);

//String Methords.
// let myString = "My name is Ayanabha.";
// console.log(myString.length);
// console.log(myString.indexOf("Ayanabha"));
// console.log(myString.lastIndexOf("name"));
// console.log(myString.slice(0, 3));
// console.log(myString.slice(3, 6));

// d = myString.replace("Ayanabha", "Agnik");
// console.log(d);

//Date....
// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());

// DOM Manupulation...
let element = document.getElementById("click");
console.log(element);
