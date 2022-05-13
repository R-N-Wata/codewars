function seven(m) {
    // your code
  let i = 0;
  let result =0;

  m = m.toString()

  result = m
  
  while(result.toString().length > 2){
    let first = Math.trunc(result/10)
    let last = result%10
    
    result = first - (2 * last)
    i++
  }
  return [Number(result), i]
}