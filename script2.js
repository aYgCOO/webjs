let nB = document.querySelector("button");
nB.addEventListener("click", show);

function show() {
  let name = prompt("Enter name of student:");
  nB.textContent = "STD CODE 394:" + name;
}
