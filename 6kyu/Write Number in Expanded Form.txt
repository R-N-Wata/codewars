function expandedForm(num) {
  // Your code here
  let result = []
   num = num.toString().split('')
  
  while(num.length !== 0){
    let first = num.shift()
    result.push(first + '0'.repeat(num.length))
    
  }
  
  return result.filter(el => [...el].some(n => '123456789'.includes(n))).join(' + ')
}
