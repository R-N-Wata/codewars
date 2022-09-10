const occ = (arr) => {
  const count = {}
  arr.forEach(el =>{
    count[el] =(count[el] || 0) +1
  })
  return count
}

function balance (arr1, arr2){
  //CODE HERE!
  
  return Object.values(occ(arr1)).sort((a,b) => a-b).join('') === 
    Object.values(occ(arr2)).sort((a,b) => a-b).join('')
 
  
}
