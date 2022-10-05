multiplicationTable = function(size) {
  // insert code here
  
  let j = 1
  let result = []
  
  while(result.length !== size){
    let inner = []
    for(let i= 1; i <= size; i++){
      inner.push(j * i)
    }
    result.push(inner)
    j++
  }
  
  return result
}
