function duplicateCount(text){
  //...
  text = text.toLowerCase()
  const repeat = (words) =>{
    let count = {}
    
    words.forEach(el =>{
      count[el] = (count[el] || 0) + 1
    })
    return count
  }
  
  let result = 0
  
  const count = repeat(text.split(''))
  for(let key in count){
    if(count[key] > 1){
      result += 1
    }
  }
  
  return result
}