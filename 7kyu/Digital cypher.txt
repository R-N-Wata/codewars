function encode(str,  n)
{

// create variable of alphabet + numbers 
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  const nums = alphabet.map((el, i) => {
    if(i !== 0 ){return i}
  } ).filter(el => el).concat(26)
  
//   loop to find corresponding number of letter 
  
  let cipher = []
  let increase = []
  let numbers = n.toString().split('');
  [...str].forEach(el => {
    cipher.push(nums[alphabet.indexOf(el)])
  })
//   loop to of correct length of n to add
//   map the numbers
  let i = 0
  while(str.length !== increase.length){
    if(numbers[i]){
      increase.push(numbers[i])
      i++
    }else{
      i = 0
    }
  }
  
  return cipher.map((el, i) => el + Number(increase[i]))

}