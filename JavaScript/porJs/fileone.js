const ayanabha = { name: "Ayanabha", age: 19, fboy: false };
const agnik = { name: "Agnik", age: 21, fboy: false };
const vivek = { name: "Vivek", age: 21, fboy: true };

//Creating Objetcs
console.log({ ayanabha, agnik, vivek });
//Creating Tables
console.table([ayanabha, agnik, vivek]);
//Loop tricks
console.time("looper");
let i = 0;
while (i < 100000000) {
  i++;
}
console.timeEnd("looper");

//Delete data base.
const deleteMe = () => console.trace("bye bye database");
deleteMe();
deleteMe();

//Object functions
const animal = {
  name: "Pussy 🐈‍⬛",
  meal: "Fish 🐟",
  diet: "Milk 🥛",
};

function feed(animal) {
  return `Feed ${animal.name} ${animal.meal} kilos of ${animal.diet}`;
}

console.log(feed(animal)); // Call the feed function with the 'animal' object as an argument

// Advanced Tag Example

/*
function horseAge(str, age) {
  const ageStr = age > 5 ? "old" : "young";
  return `${str[0]}${ageStr} at ${age} years`;
}
const bio2 = horseAge`This horse is ${horse.age}`;
*/

//Push consept using sprade operator
let friends = ["Afsan, Prakash"];
friends = [...friends, "Agnik", "Vivek", "Shivam"];
console.log(friends);
//Unshift consept using sprade operator
let friendsTwo = ["Jeet, Swrup"];
friendsTwo = ["Agnik", "Vivek", "Shivam", ...friendsTwo];
console.log(friendsTwo);

//Async Await
const sumRandomAsyncNums = async () => {
  const first = await random();
  const second = await random();
  const third = await random();
  console.log(`Result ${first + second + third}`);
};
