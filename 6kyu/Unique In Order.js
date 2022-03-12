var uniqueInOrder=function(str){
  //your code here - remember iterable can be a string or an array
  
  let arr = []
  
  for(let i = 0; i <= str.length ; i++){
    if(str[i] !== str[i + 1]){
      arr.push(str[i])
    }
  }
  return arr
}
