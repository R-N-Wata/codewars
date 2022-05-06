function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  
  let average = classPoints.reduce((a, b) => a+b)/classPoints.length
  
  return (yourPoints > average)? true : false
}