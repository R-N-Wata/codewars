var encryptThis = function(text) {
  // Implement me! :)
  
  return text.split(' ').map(word => {
    
    word = word.split('')
    let first = word[0], last = word[word.length-1], second = word[1]
    word.splice(0, 1, first.charCodeAt(0))

    if(word.length > 1){
      
      word.splice(word.length-1, 1, second)
      word.splice(word.indexOf(second), 1, last)
      return word.join('')
      
    }else {
      
      return word.join('')
    }
  }).join(' ')
}