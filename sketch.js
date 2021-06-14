var a = prompt("Enter the first variable");
var b = prompt("Enter the second variable");
function setup() {
  createCanvas(400, 400);
  var b2 = createButton("Click here to swap");
 b2.mousePressed(swap);

 b3 = createButton("Add");
 b3.mousePressed(add);

 b2.position(0,0)

}

function draw() {
  background(220);
}
function swap(){
  [a,b]=[b,a]
  console.log("value of A after swapping is "+a)
  console.log("value of B after swapping is "+b)
}
function add(){
  var c = a+b;
console.log (+(a+b));
}