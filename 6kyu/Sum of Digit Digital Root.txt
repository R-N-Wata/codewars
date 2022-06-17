function digital_root(n) {
  // ...
  
  if(n < 10){
    return n
  }
  n = n.toString()
  const sum = [...n].reduce((a, b) => Number(a) + Number(b))
  return digital_root(sum)
}
