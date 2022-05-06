function isAllPossibilities(x){
return x.length > 0 ? x.sort((a, b) => a - b).every((x, i) => x === i) : false
  
}