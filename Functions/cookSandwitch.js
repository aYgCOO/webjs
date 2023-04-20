let bread1 = prompt("Witch bread would you like to have:- ");
let vegg1 = prompt("What are your favorite veggies");
let sauce1 = prompt("Which sauce would you like to have:- ");

function makeSandwich(bread, vegg, sauce) {
  let sandwich = bread + "bread" + vegg + "" + sauce + "sandwich";
  return sandwich;
}

let vegSandwich = makeSandwich(bread1, vegg1, sauce1);

//Code does'nt work!
console.log("Hellow world!");
