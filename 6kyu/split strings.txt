function solution(str){
   
  const len = str.length
  
  len %2 ===0? str : str =str.concat('_')
  
  str = str.split('')
  
  let result = []
  while(str.length > 0){
    result.push(str.slice(0,2).join(''))
    str.splice(0,2)
  }
  
  return result
}
