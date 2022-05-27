var countSheep = function (num){
  //your code here
  
  //integer num
  // a string 
  //countSheep(2) => '1 sheep... 2 sheep...'
  
//   loop
  let str = []
  for(let i = 1; i <= num ; i++){
    str.push(i + ' sheep...')
  }

  return str.join('')
}