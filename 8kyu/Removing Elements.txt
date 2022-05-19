function removeEveryOther(arr){
  //your code here
  
  return arr.map((el,i) => i%2!==0? undefined: el).filter(el => el)
}