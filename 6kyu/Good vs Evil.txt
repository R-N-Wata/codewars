  const sum = (side, worth ) => {
     return side.split(' ').reduce((r, v, i) => {
      return r + (worth[i] * v)
    }, 0)
  }
  const result = sum(good, [1,2,3,3,4,10]) - sum(evil, [1,2,2,2,3,5,10])
  
 
  if(result > 0 ) {return 'Battle Result: Good triumphs over Evil'}
  else if( result < 0){return 'Battle Result: Evil eradicates all trace of Good'}
  else if(result === 0) {return 'Battle Result: No victor on this battle field'}

  
  
}