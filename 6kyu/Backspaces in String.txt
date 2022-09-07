function cleanString(s) {
//   ... your code ...
  s = s.split('')
  let result = []
  
  for(let i = 0; i <= s.length; i++){
    if(s[i] === '#'){
      result.pop()
    }else result.push(s[i])
        }
  
  return result.join('')
}
