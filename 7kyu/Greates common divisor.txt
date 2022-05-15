function mygcd(x,y){
  //your code here
  
  let result
  if (x === y){
    return 1
  }
  
  while(x !== y){
    if(x > y){
      x = x-y
    }else{
      y = y-x
    }
   result = x
  }

  return result
  
}