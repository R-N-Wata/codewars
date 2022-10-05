function nthFibo(n) {
  // Return the n-th number in the Fibonacci Sequence
  
  let seq = [0, 1]
  if(n === 1 || n === 0) return seq[n-1]
  for(let i = 2; i < n; i++){
    let next = seq[i -1] + seq[i -2]
    seq.push(next)
  
  }
  
  return seq[n-1]
  
}