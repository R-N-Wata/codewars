function isNarcissistic(n) {
  
  // params =>  a number - not sure if its an integer || floated num
  // return => boolean 
  //  example => 25 => 2 **2 + 5**2 = 29
  
  //find l of number
  const strNum = n.toString()
  let len = strNum.length
  let result = 0
  for(let i = 0; i < len; i++){
    result+= Math.pow(strNum[i], len)
  }
  return result === n
  
  }