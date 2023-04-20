//Objects;
console.log("---Objects---");
let animal = {
  name: "Zebra",
  leg: 4,
};
for (let key in animal) {
  console.log(key, animal[key]);
}
console.log(animal.name);
console.log(animal["leg"]);
//Arrays
console.log("---Arrays---");
let names = ["Rahul", "Agnik", "Shibham", "Prakash", "Sristi"];
for (let index in names) {
  console.log(index, names[index]);
}
//For of loop;
console.log("---For of loops---");
for (let name of names) {
  console.log(name);
}
