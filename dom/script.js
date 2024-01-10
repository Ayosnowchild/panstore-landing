let element = document.getElementById("para");
element.innerHTML = "Hello new topic";
console.log(element);

document.getElementById("new").innerHTML = "Hello world";
element.style.color = "red";
let heading = document.getElementById("h1");
heading.style.display = "none";
console.log("heading", heading);

function changeColor() {
  let text = document.getElementById("what");
  text.style.color = "blue";
}
// const x = document.forms["frm1"];
// let text = "";
// for (let i = 0; i < x.length; i++) {
//   text += x.elements[i].value + "<br>";
// }
// console.log(x);
// document.getElementById("demo").innerHTML = text;
