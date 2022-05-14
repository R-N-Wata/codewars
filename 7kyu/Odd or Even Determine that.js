function oddOrEven(n) {
  if(n !== 1){
    if(n % 2 === 1){
      return 'Either'
    }else if(n/2 % 2 === 0){
      return 'Even'
    }else {
      return 'Odd'
    }
  }
  return 'Either'
}