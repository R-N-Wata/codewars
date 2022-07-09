function towerBuilder(n) {
  // build here
  let result = []
  let startNum = 1
  
  for(let i = 1; i <= n; i++){
    
    result[i-1] = ' '.repeat(n-i) + '*'.repeat(startNum) + ' '.repeat(n-i)
    startNum+=2
  }

  return result
}
