function deleteNth(arr,n){
  // ...
  
  let count = {}
  
  return arr.filter(el =>{
    count[el] = (count[el] || 0) +1
    return count[el] <= n
  })
  
}


// params => an array of integers and an intger
// return => an array
// example => 1,2,3,4,2,3,4,3,4 n === 2 => 1,2,3,4,2,3,4
// loop filter the numbers that appear less than or equal to n times 

