function barista(coffees){
  

  if (coffees.length === 0){
    return 0
  }
  coffees = coffees.sort((a, b) =>a-b)
  
  let wTime = coffees[0]
  let arr =[];
  arr.push(wTime)
  for (let i= 0; i < coffees.length; i++){
   
       if (i !== 0){
      wTime = wTime + (coffees[i] + 2 )
      arr.push(wTime)
    }
    
  }
  
  return arr.reduce((a,b) => a+b)
}