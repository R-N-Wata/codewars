function toCamelCase(str){
  let result = []
  str.split('').forEach((_,i) =>{
    if(str[i]=== '-' || str[i] ==='_'){
      result.push( str[i +1].toUpperCase())  
    }else if(str[i-1]=== '-' || str[i-1] ==='_')
      result.push(null)
    
    else{
     result.push(str[i])
    }
    
  })
  
  return result.filter(el => el).join('')

}