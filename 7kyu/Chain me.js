function chain(input, fs) {
// implement the "chain" function
  const num = (i) =>i +0
  
  fs.unshift(num(input))
  let arr = []
   fs.forEach((el, i) =>{
    let arg
    if(i == 0){
     arr.push(el)
      return el
    }

    arg = arr[i-1]
    arr.push(el(arg))
   })
  
  return arr[arr.length-1]
}