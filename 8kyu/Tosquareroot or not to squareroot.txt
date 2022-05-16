function squareOrSquareRoot(array) {
  return array.map(num => {
    if(Math.sqrt(num) === parseInt(Math.sqrt(num))){
       return num =Math.sqrt(num)
      }else{
       return num =Math.pow(num, 2) 
        }
    })
}