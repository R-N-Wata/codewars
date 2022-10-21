function oddOrEven(arr) {
   //enter code here
  
  let sum = arr.length === 0 ? 0 : arr.reduce((a, b) => a + b)
  
  return sum % 2 === 0 ? 'even' : 'odd'
}
