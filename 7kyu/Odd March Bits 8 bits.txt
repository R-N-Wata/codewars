
function bitMarch (n) {
  let arr = [0,0,0,0,0,0,0,0]
  let len = arr.length
  let res = []
  
  for(let i = len - n; i >= 0; i--){
    let innerArr = [...arr]
    
    for(let j = 0; j < n; j++){
      innerArr[j + i] = 1
    }
    
    res.push(innerArr)
  }
  
  return res
}

