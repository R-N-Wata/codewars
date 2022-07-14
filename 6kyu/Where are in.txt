function inArray(arr1,arr2){
  //...
  
  const str = arr2.join(' ')
  
  return arr1.filter(w => str.indexOf(w) !== -1).sort()
}

