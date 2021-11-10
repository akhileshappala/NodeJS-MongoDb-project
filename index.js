
var rect = require('./rectangle');


function solveRect(l,b) {
  console.log("Solving for rectangle with l = " + l + " and b = " + b);

  rect(l, b, (err, rectangle) => {
    if (err) {
      console.log("Error :", err.message); //Error object which is returned by a call back function in rectangle module
    }
    else{
      console.log("The area of rectangle when l is " + l + " and b " + b + " is " + rectangle.area() + " and perimeter is " +rectangle.perimeter())
    } //.area and .parameters are automatically available here from the module and l,b will be automatically passed to the area and perimeter -- closure concept
  });
  console.log("This statement is after the call to rect");
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);