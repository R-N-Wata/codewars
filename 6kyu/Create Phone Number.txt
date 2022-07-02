function createPhoneNumber(numbers){
  
  let result = []
  
  numbers.forEach((n, i) =>{
    
    if(i <= 2){
      result.push(n)
    }if(i ===3){
      result.unshift('(')
      result.push(')')
      result.push(' ')
    }if(i > 2 &&i <= 5){
      result.push(n)
    }if(i === 6){
      result.push('-')
    }if(i >5 && i < numbers.length){
      result.push(n)
    }
  })
  
  return result.join('')
  
}
