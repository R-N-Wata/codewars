function rowSumOddNumbers(n) {
	// TODO
  
  let arr = []
  let i = (n * n) -(n-1)

  while(arr.length !== n){
     if(i % 2 !== 0) arr.push(i)
     i++
   }
  return arr.reduce((a, b) => a+ b)
}