function solution(str, ending){
  // TODO: complete
  
  
  let newStr = [...str].reverse().slice(0, ending.length).reverse().join('')
  
  return newStr === ending
  
  
  
}