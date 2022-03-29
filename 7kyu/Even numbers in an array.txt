function evenNumbers(array, number) {
  // good luck
  
  const even = array.filter(n => n % 2 === 0).reverse()
  let arr= []
  for (let i =0; i < number; i++)arr.push(even[i])
  
  return arr.reverse()
}