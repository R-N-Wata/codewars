function diamond(n){
  if(n % 2 === 0 || n < 1)return null
  let str = ''
  
  for(let i = 0; i < n; i++){
    let len = Math.abs((n-2* i-1) / 2)
    str += ' '.repeat(len)
    str += '*'.repeat(n-2*len)
    str += '\n'
  }
  
  return str
}

