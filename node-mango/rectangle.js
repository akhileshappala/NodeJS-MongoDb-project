
module.exports=(x,y,callback)=>{
  if(x <= 0 || y<=0){
    setTimeout(()=> callback(new Error("Rectangle dimensions shou;d be greater than 0: l "+x+" and "+y),null), // call back takes 2 params - (function, return value)
    2000); // when function is error then return value is ignored(null)
  }
  else {
    setTimeout(()=> 
    callback(null,
      {
      perimeter :(x,y) => (2*(x+y)),
      area :(x,y) => (x*y)
    }), //Here I just want the return value, so ignored the function param
    2000);
  }

}
