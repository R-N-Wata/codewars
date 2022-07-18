// complete the function
function solution(str) {
    
  str = str.split('')
  let result = []
  
  str.forEach(l => {
    if(l === l.toUpperCase()){
      result.push(' ')
      result.push(l)
    }else{
      result.push(l)
    }
  })
  
  return result.join('')
}
