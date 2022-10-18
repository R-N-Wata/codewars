Array.prototype.filter = function (condition) {
  //nothing here, you will feel pretty awesome to write down by yourself
  //have fun :)

  let arr = []
  
  this.forEach(el =>{
    if(condition(el))arr.push(el)
  })
  
  return arr
}
