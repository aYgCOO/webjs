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

var number1 = 34;
var number2 = 56;
console.log(number1 + number2);

/* multi
line
comments! */

//4. DataTypes in JavaScripts.
// Numbers
var num1 = 45;
var num2 = 54;

// Strings
var str1 = "This is a string";
var str2 = "This is also a string";

//Objects
var marks = {
  Shivam: 34,
  Agnik: 98,
  Ayanabha: 99.99,
};
console.log(marks);

// Booleans
var a = true;
var b = false;
console.log(a, b);

// Undefined
var und = undefined;
console.log(und);
console.log(undefined);

//null
var n = null;
console.log(n);

/* 
At a very high level , there are two types of data types in JavaScript
1. Primitive data types: undefined, null, number, string, boolean, symbol
2.Reference data types: Arrays and Objects
*/

var arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr[3]);
var ar = ["Ayanabha", "Agnik", "Shivam", "Prakash", "Swrup", "Jeet", "Afsan"];
console.log(ar);
console.log(ar[2]);
console.log(ar[1]);
