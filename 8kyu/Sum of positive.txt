function positiveSum(arr) {
  
  const result = arr.filter(el => el > 0)
 return arr.length > 0 && result.length > 0 ? result.reduce((a,b) => a + b) : 0
}