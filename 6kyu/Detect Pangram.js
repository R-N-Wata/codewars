function isPangram(string){
  //...
  string = string.toLowerCase()
  const alpha = 'abcdefghijklmnopqrstuvwxyz'
  
  return alpha.split('').every(el => string.includes(el))
}
 
