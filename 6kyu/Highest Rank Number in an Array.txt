function highestRank(arr){
//Your Code logic should written here
  
  let result =[]
  const count = {}
  
  arr.forEach(el =>{
    count[el] = (count[el] || 0) +1
    
  })
  
  const max = Math.max(...Object.values(count))
  
  for(let key in count){
    if(count[key] === max)result.push(key)
  }
  
  return +Math.max(...result)
}

