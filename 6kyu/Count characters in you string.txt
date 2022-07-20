function count (string) {  
  // The function code should be here
  
  let count = {}
  
   string.split('').forEach(el =>{
    count[el] = (count[el] || 0) + 1
    return count[el]
  })
   return count;
}