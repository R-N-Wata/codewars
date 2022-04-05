function remove (string) {
  //coding and coding....
  let regex = /!{1}[a-z]+|[a-z]+!{1}/gi

  const result = string.split(' ').filter(el =>{
    let marks= 0
  
    for(let i = 0; i < el.length; i ++ ){
      if(el[i] === '!') marks +=1
    }
    
    if (marks !== 1)return el
  })
  
  return result.length == 0? '': result.join(' ')
  
  }