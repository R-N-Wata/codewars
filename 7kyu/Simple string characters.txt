function solve(s){
 //..
  let arr= []
  const lowerLetter = 'abcdefghijklmnopqrstuvwxyz'
  const upperLetter = lowerLetter.toUpperCase(lowerLetter)
   s = s.split('')
  const upperCase = s.filter(el => el === el.toUpperCase() && upperLetter.includes(el)).length
  const lowerCase = s.filter(el => el === el.toLowerCase() && lowerLetter.includes(el)).length
  
  s = s.join('').replace(/[A-Za-z]/g, '')
  
  const nums = '1234567890'
  const digits = s.split('').filter(el => nums.includes(el)).length
  
  let special = s.replace(/\d/g, '').length
  return arr.concat(upperCase, lowerCase, digits, special)
}