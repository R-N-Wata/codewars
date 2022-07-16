function longestConsec(strs, k) {
    // your code
  
  if(k > strs.length || k <= 0){
    return ''
  }
  
  const results = strs.map((word, i) => {
    for(let j = 1; j< k; j++){
      if(strs[j +i] !== undefined) word = word + strs[j +i]
    }
    return word
  })
  
  const scores = results.map(el => el.length)
  const maxLength = scores.indexOf(Math.max(...scores))
  
  return results[maxLength]
}