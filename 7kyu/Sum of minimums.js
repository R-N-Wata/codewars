function sumOfMinimums(arr) {
  // your code here
  return arr.map(el => Math.min(...el)).reduce((a, b) => a +b)
}
