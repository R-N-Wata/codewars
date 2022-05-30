function isCoprime(x, y) {
  
  let higher = x >y ? x : y
  let lower  = y === higher? x : y
  let arr = []
  if(lower  === 0){
    return higher === 1
    
  }

  return isCoprime(lower, higher-lower)
}