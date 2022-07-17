//return the total number of smiling faces in the array
function countSmileys(arr) {
  let result = 0
  const len = arr.length
  
  for(let i = 0; i < len; i++){
    let face = arr[i]
    if(face.length === 3){
      if(face.includes('-') || face.includes('~')){
        if((face[0] === ':' || face[0] ===';') &&
           (arr[i][2] === 'D' || face[2] === ')')){
          result++
        }
      }
    }else{
        if((face[0] === ':' || face[0] ===';') &&
           (face[1] === 'D' ||face[1] === ')')){
          result++
        }
    }
  }

  return result
}

