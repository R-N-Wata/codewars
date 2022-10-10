function cleanString(s) {
//   ... your code ...
  s = [...s]
  const arr = []
  
  for(let i = 0; i <= s.length ; i++){
    if(s[i] !== '#'){
      arr.push(s[i])
    }else{
      arr.pop()
    }

  }
  
  return arr.join('')
}
