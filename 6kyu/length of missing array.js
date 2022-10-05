function getLengthOfMissingArray(arrayOfArrays) {
  if(!arrayOfArrays || arrayOfArrays.includes(null))return 0
  const newArr = arrayOfArrays.map(arr => arr.length).sort((a, b) => a - b)
  
  let result = 0
  if(newArr.includes(0))return 0
  for(let i = 0; i < newArr.length; i++){
    if(newArr[i+1] - newArr[i] >1){
     result = newArr[i] +1
    }
  }
  
  return result

  
}