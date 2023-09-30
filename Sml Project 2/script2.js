let btn = document.querySelector("button");
let change = document.getElementById("change");
btn.addEventListener("click", function () {
  let promt = prompt("ENTER THE NAME OF THE STUDENT");
  let promt2 = prompt("ENTER THE STUDENT CODE");
  change.textContent = "STD CODE:" + promt2 + " " + "NAME:" + promt;
});
