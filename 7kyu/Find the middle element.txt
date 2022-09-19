function gimme (triplet) {

  let res 
  triplet.forEach(el =>{
    if(el !== Math.min(...triplet) && el !== Math.max(...triplet))res = el
  })
  
  return triplet.indexOf(res)
}