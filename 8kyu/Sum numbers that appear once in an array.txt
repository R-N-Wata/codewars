
const count = (arr) => {
  const countObj = {}

  arr.forEach(el => {
   countObj[el] = (countObj[el] || 0) + 1;
    
  })

  return countObj
}

function repeats(arr){
  const obj  = count(arr)

  let res = 0

  for(let key in obj){
    if(obj[key] === 1)res+=Number(key)
 
  }
  
  return res
}