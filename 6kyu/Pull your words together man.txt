function sentencify(words) {
  // TODO: Write your solution here!
  
  return words.map((word, i) => {
    if(i == 0){
      if(i == words.length-1){
        return `${[...word].map((l, j) => j === 0 ? l.toUpperCase() : l).join('')}.`
      }else{
         return [...word].map((l, j) => j === 0 ? l.toUpperCase() : l).join('')
      }
     
    }else if (i == words.length-1){
      return `${word}.`
    } else{
      return word
    }
  }).join(' ')
}