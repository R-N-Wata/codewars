function noSpace(x){
  
  return x.replace(/\s/g, '')
}


||


function noSpace(x){
  
  return x.split(' ').filter(el => el !== '').join('')
}