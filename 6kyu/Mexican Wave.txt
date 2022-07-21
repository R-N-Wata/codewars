function wave(str){
  // Code here
  
  let result = []
  let i = 0
  
  while (result.length !== str.length){
    let string = str
    string =[...string].map((el, j) =>{
      if(i ===j ){
        return string[i].toUpperCase()
      }else{
        return el
      }
    }).join('')
 
    result.push(string)
    i++
  }
    const upperLetters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
   return result.map(word => [...word].some(el => upperLetters.includes(el)) ? word : undefined).filter(el=> el)
    
    }