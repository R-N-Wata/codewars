function getCount(str) {
  let vowelsCount = 0;
  
  // enter your magic here
  
  [...str].forEach(l => {
    if('aeiou'.includes(l)){
      vowelsCount += 1
    }
  })
  
  return vowelsCount;
}