function remove (string) {
  //coding and coding....
  string = string.split('')
  if(string[string.length -1] === '!') string.pop()
  
  return string.join('')
}
