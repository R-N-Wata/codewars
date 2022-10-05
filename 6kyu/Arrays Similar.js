const occ = (arr) => {
  const count = {}
  
  arr.forEach(el =>{
    count[el] = (count[el] || 0) +1
    
  })
  return count
}

function arraysSimilar(arr1, arr2) {
  // TODO: Implement your arraysSimilar 
  
  const count1 = occ(arr1)
  const count2 = occ(arr2)
  
  const result = []
  
  for(let key in count1){
    if(count1[key] === count2[key])result.push(true)
    else result.push(false)
  }
  (arr1.every(el =>arr2.every(i => typeof i === typeof el))) && 
    (arr1.length === arr2.length) ?
     result.push(true) 
   : result.push(false)
  
 
  return result.every(el => el)
}
