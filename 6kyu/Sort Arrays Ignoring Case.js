// input: names - unsorted strings
// output: case-agnostic sort
sortme = function( names ){
  
  return  names.sort((a, b) =>{
    a = a.toLowerCase()
    b = b.toLowerCase()

    if(a < b)return -1
    else if(a < b)return 1
    else return 0
  })

}

