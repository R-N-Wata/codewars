function nthSmallest() {
  // Good luck!
  let arr = Array.from(arguments)
  const i = arr[arr.length-1]
  arr = arr.slice(0, arr.length-1).flat().sort((a, b) => a-b)
  return arr[i-1]
  
}
