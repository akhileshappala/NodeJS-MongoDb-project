
module.exports=(x,y,callback)=>{
  if(x <= 0 || y<=0){
    setTimeout(()=> callback(new Error("Rectangle dimensions shou;d be greater than 0: l "+x+" and "+y),null),
    2000);
  }
  else {
    setTimeout(()=> 
    callback(null,
      {
      perimeter :() => (2*(x+y)),
      area :() => (x*y)
    }),
    2000);
  }

}


perimeter =  (x, y) => (2*(x+y));

area = (x, y) => (x*y);