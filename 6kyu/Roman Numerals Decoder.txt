function solution(roman) {
  // complete the solution by transforming the 
  // string roman numeral into an integer

  let Numerals = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1
    
  }
 let array = roman.split('')
 let result = 0;
 
 for(let i = 0; i < array.length; i++){
   
   if(Numerals[array[i]] < Numerals[array[i +1]]){
     result += Numerals[array[i +1 ]] - Numerals[array[i]]  
     i++;
   }else{
      result += Numerals[array[i]]
   }
 }
  
  return result
}
