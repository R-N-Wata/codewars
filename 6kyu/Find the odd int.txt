function findOdd(a) {
  //happy coding!
  const grouped = (arr) => {
    let count = {}
    
    arr.forEach(el =>{
      count[el] = (count[el] || 0) +1
    })
    
      return count
  }
  
  const count = grouped(a);

  for(let key in count){
    if(count[key] % 2 !== 0){
      return +key
    }
  }
}