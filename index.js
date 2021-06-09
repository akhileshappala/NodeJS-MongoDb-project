
var rect = require('./rectangle');




function solveRect(l,b) {
  console.log("Solving for rectangle with l = " + l + " and b = " + b);
  rect(l, b, (err, rectangle) => {
    if (err) {
      console.log("Error MEssage", err.message);
    }
    else{
      console.log("The area of rectangle when l is " + l + " and b " + b + " is " + rectangle.area() + " and perimeter is " +rectangle.perimeter())
    }
  })
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);