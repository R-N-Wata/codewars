function solve(s){
    //..
  
  let lower = 0
  let higher = 0
  
  s.split('').forEach(el => {
    if(el.toLowerCase() === el) lower += 1
    else higher += 1
  })
  
  if(lower > higher || lower === higher){
    return s.toLowerCase()
  }else if(lower < higher) return s.toUpperCase()
  
 
  
}