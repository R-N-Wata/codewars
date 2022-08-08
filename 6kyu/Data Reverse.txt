  function dataReverse(data) {
  // Your code here
   
   let result = []
   
   while(data.length !== 0){
     let bytes = data.slice(data.length-8)
     result.push(bytes)
     data.splice(data.length-8)
   }
   return result.flat()
}
​