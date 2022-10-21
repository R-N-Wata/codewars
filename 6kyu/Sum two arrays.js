function addArrays(arr1, arr2) {
  if(!arr1.length && !arr2.length ) return []
  const sum = String(+arr1.join('') + +arr2.join('')).split('')
  let result  = []
  
  for(let i = 0; i < sum.length ; i++){
    if(sum[i] === '-')result.push(+(sum[i] + sum[i + 1]))
    else if(sum[i-1] !== '-')result.push(+sum[i])
  }

   return result
}