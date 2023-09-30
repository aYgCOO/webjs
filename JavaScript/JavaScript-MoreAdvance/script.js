/* Sprade operator and destructuring */

//Sprade Operator
let arr = [1, 2, 3];
function avg(a, b, c) {
  var avg = a + b + c / 3;
  return avg;
}
console.log(avg(...arr));

//another technique.
let a = [4, 5, ...arr, 6, 7];
console.log(a);

//Arrays coppy
let b = [12534, 25564, 67899, 90567, 23456, 12345];
let c = [...b];
let d = c.push(100000);
console.log(b);
console.log(c);

//Objects coppy
let object = {
  name: "Ayanabha",
  age: 19,
  city: "Kolkata",
};
console.log(object);

let secondObject = { ...object };
secondObject.name = "Agnik";
let changeName = secondObject.name;
console.log(changeName);
console.log(secondObject);

//destructuring
// Copying the objects values in one line.
let { name, age, city } = secondObject;
console.log(name, age, city);
