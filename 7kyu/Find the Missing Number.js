function missingNo(nums) {
  const min = Math.min(...nums)
  const max = Math.max(...nums)
  let result = 0
  
  for(let i = min; i <=max ; i++){
    if(!nums.includes(i)){
      result += i
    }
  }
  
  return result
}