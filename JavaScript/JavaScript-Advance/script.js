//How to copy reference value
//Arrays:-
//Normal arr print;
var a = [1, 2, 3, 4, 5, 6, 7, 8];
var b = a;
console.log("Values of a variable.");
console.log(a);
console.log("Values of b variable");
console.log(b);
// Using sprade operator;
let arr = [27, 34, 55, 78, 19];
let c = [...arr];
del = c.pop();
console.log("Before deleting", arr);
console.log("After deleting", del);

// Objects:-
//Normal object print;
var obj = {
  name: "Ayanabha",
  age: 19,
  city: "Kolkata",
};
console.log(obj);
console.log(obj.name);

var SecondObj = obj;
obj.name = "Agnik";
console.log(obj.name);

//Using sprade operator;
let firstObj = {
  name: "Vivek",
  age: 20,
  city: "Kolkata",
};
console.log(firstObj.name);
let seecOndObj = { ...firstObj };
seecOndObj.name = "Shivam";
console.log(seecOndObj.name);

//Main Advance topics....
//For-each:-
//For each loop run only arrays;
let each = [123, 235, 567, 897, 123, 234, 500];
each.forEach(function (value) {
  console.log(value + 100);
});

//For-in:-
//For in loop run only objects;
let innObject = {
  name: "Ayanabha",
  age: 19,
  city: "Kolkata",
};
for (var keyValue in innObject) {
  console.log(keyValue, innObject[keyValue]);
}

//do-while loop:-
doo = 0;
do {
  console.log("Fuck!");
  doo++;
} while (doo < 10);

//Call back function.
call = 1236748;
setTimeout(function () {
  console.log(call);
}, 5000);

//First class function....
function abcd(a) {
  a();
}
abcd(function () {
  console.log("Oyea!");
});
