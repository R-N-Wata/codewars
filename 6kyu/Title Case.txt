const upperCase = (str) => {
   return str.slice(0,1).toUpperCase() + str.slice(1).toLowerCase()
}

function titleCase(title, minorWords) {
 
   if (minorWords !== undefined) {
     
    minorWords = minorWords.toLowerCase().split(' ')

    return title.toLowerCase()
      .split(' ')
      .map((word, i) => {
        if(i == 0) return upperCase(word)
        else if(minorWords.includes(word)) return word.toLowerCase()
        return upperCase(word)
    }).join(' ')
   } 
  
  return title.split(' ')
    .map(el => {
     return upperCase(el)
  }).join(' ')

}
