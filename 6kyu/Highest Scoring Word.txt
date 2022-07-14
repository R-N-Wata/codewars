function high(x){

  x = x.split(' ')
  
  const alphabet = ' abcdefghijklmnopqrstuvwxyz'
  
  const scores = x.map(word => (
    [...word].map(l => alphabet.indexOf(l))
    .reduce((a, b) => a+b)
  ))
  
  const highest = Math.max(...scores)
  return x[scores.indexOf(highest)]
}