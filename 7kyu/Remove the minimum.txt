function removeSmallest(numbers) {
  
  let nums = [...numbers]
  let smallest = Math.min(...nums)
  nums.splice(nums.indexOf(smallest), 1)
  
  return nums
  
  
  
}