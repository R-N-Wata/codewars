function order(words){
  // ...
  
  const nums = '123456789'
  const numbers = words.split('').filter(el => nums.includes(el))
  const sorted = numbers.sort((a, b) => a -b)
  let arr = []
   sorted.forEach(el => {
    words.split(' ').forEach(word => {
      if(word.includes(el)){
        arr.push(word)
      }
    })
  })
  
  return arr.join(' ')
}