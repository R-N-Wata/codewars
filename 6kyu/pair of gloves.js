function numberOfPairs(gloves)
{
  const count = {};
  let result= 0
  gloves.forEach(element => {
    count[element] = (count[element] || 0) + 1;
  });
  
  for(let key in count){
    result+= Math.trunc(count[key]/2)
  }
  return result
}