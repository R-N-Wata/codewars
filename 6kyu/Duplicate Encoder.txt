function duplicateEncode(word){
    // ...
  word = word.toLowerCase()
  const repeat = (str) => {
    let count = {}
    
    str.split('').forEach(el => {
      count[el] = (count[el] || 0) +1
    })
    return count
  }
  
  const count = repeat(word)
  
  return word.split('').map(el => count[el] === 1 ? '(' : ')').join('')
}
