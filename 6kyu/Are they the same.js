function comp(arr1, arr2){
  //your code here
  if (arr1 === null || arr2 === null ){
    return false 
  }
  arr1.sort((a, b) => a-b)
  arr2.sort((a, b) => a-b)

  
  return  arr1.map(el => Math.pow(el, 2)).every((e, i) => e == arr2[i])
  

}