// return masked string
function maskify(c) {
  if(c.length < 4){
    return c
  }
  let last4 = [...c].splice(c.length-4).join('')
  
  let masked = [...c].map(el => el = '#').filter((e, i) => (i == 0 || i==1 || i==2 || i==3)? undefined:e).join('')
  
 
  return masked.concat(last4)
}