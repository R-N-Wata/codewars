function findUniq(arr) {
  // do magic
  
  let result = 0
  let repeat = (arr) => {
    let count = {}
    
    arr.forEach(el =>{
      count[el] = (count[el] || 0)+1
      
    })
    return count
  }
  
  const count = repeat(arr)
  
  for(let key in count){
    if(count[key] === 1){
      result = key
    }
  }
  
  return +result
  

}
