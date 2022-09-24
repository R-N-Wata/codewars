function encrypt(text, n) {
  if(text === '' )return ''
  else if(text === null) return null
  else if(n < 1) return text
  let arr = [...text]
  let result 
 
  
  for(let i = n; i > 0; i--){
    const odd = arr.filter((_, i) => i % 2 !== 0)
    const even = arr.filter((_,i) => i % 2 == 0)
    result = odd.join('') + even.join('')
    arr = [...result]
    
  }
  console.log(result)
  return result
}

function decrypt(encryptedText, n) {
  if (!encryptedText || !encryptedText.length || n <= 0) return encryptedText
  
  let arr = [...encryptedText]
  let result = ''
  let j =0
  let i = 0
  
  var first = encryptedText.slice(0, encryptedText.length / 2);
  var second = encryptedText.slice(encryptedText.length / 2);
    
  while (result.length < encryptedText.length){
    if(result.length % 2 === 0){
      result += second[i]
      i++
    }else{
      result += first[j]
      j++
    }
  }
  console.log(result)
  return decrypt(result, --n);
  
}
