function minSum(arr) {
 
  arr.sort((a, b) => a - b)
  let result = 0;


  while (arr.length){
    result += arr.pop() * arr.shift()
  }
  
  return result

 
}