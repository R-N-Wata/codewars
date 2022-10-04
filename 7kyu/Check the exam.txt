function checkExam(array1, array2) {
 // good luck
  
  let result = 0
  
  for(let i = 0; i < array1.length ; i++){
    if(array1[i] == array2[i])result += 4
   else if(array2[i] === '' && array1 !== '')result += 0
    else if(array1[i] !== array2[i]) result -= 1
  }
  
  return result < 0 ? 0 : result
}
