//Hoisting
// It's basically when we print the variable without define it's. It's run but return Undefined.
// In other programming languages it's gives an error!
// But in JavaScript's the process is callled hoisting.

//Example:-
var a = 12;
console.log(a);

//but;
var b;
console.log(b);
//It's return Undefine not error!

//Premitive & Reference (Non-Premitive) Data types
//Premitives = number, string, null, boolean, undefined.
//Reference = [], (), {}...

//If else

ifelse = "My name is Ayanabha Chatterjee.";
a = 12;
b = 22;
if (a < b) {
  console.log(ifelse);
} else {
  console.log("Nothing!");
}

//Loops
//Forloops;
console.log("Forloop!");
var number = 11;
for (let i = 0; i < number; i++) {
  console.log(i);
}

//While loops;
console.log("While loop!");
let i = 0;
var number = 11;
while (i < number) {
  console.log(i);
  i++;
}

//Functions.
console.log("Functions!");
function myfunction() {
  console.log("My first function.");
}
myfunction();

console.log("My Second Function!");
function secondFunction(a, b) {
  console.log("Addition.");
  sum = a + b;
  return sum;
}
i = secondFunction(10, 20);
console.log(i);

//Arrys.
arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);

// Use pop() to remove the last element and assign it to 'poop'
poop = arr.pop();

// Use push(10) to add the element 10 to the end of the array and assign the new length to 'puush'
puush = arr.push(10);

console.log(poop); // Logs the removed element (7)
console.log(puush); // Logs the new length of the array (7, because one element was added)

// Use shift() to remove the first element and assign it to 's'
s = arr.shift();

// Use unshift() to add an element at the beginning of the array and assign the new length to 'us'
us = arr.unshift(0);

console.log(s); // Logs the removed element (1)
console.log(us); // Logs the new length of the array (7, because one element was added at the beginning)
console.log(arr); // Logs the modified array ([0, 2, 3, 4, 5, 6, 10])

//Objects
obj = {
  name: "Ayanabha",
  age: 19,
  City: "Kolkata",
};
console.log(obj);
console.log(obj.name);
