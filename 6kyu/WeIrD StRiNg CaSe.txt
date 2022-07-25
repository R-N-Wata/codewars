function toWeirdCase(str){
  //TODO
  
  const result = []
  let newStr = str.split('')
  let i = 0
  while( result.length !== str.length){
    if(newStr[i] === ' '){
      newStr = newStr.slice(i+1)
      result.push(' ')
      i = 0
    } 
    if (i % 2 == 0) result.push(newStr[i].toUpperCase())
    else if(i % 2!== 0) result.push(newStr[i].toLowerCase())
    i++
  }
  return result.join('')
}