function twoSum(nums, target) {
  // ...
  let sum = 0;
  let random1 = 0
  let random2 = 0
 while(sum !== target){
    random1 = Math.floor(Math.random() * nums.length)
    while(random2 === random1){
      random2 = Math.floor(Math.random() * nums.length)
    }
    sum = nums[random1] + nums[random2] 
  }
  
  return [random1, random2]
}
