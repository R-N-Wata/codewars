const isCoprime = (a, b) => {
  
   for(let i = 2; i <= Math.min(a, b) ; i++){
     if(a % i === 0 && b % i ===0 )return false
   }
  return true
}


function fromNb2Str(n,sys){
  if(sys.reduce((a,b) => a *b)< n){
    return 'Not applicable'
  }
  let arr = sys
  let boolean = []
  for(let i = 0; i <= sys.length; i++){
    
    for(let j = i+1; j <= arr.length; j++){
       boolean.push(isCoprime(arr[j], sys[i]))
    }
   
  }
  
  if(!boolean.every(el => el)){
    return 'Not applicable'
  }
  
  return sys.map(el => el = '-' +n % el + '-').join('')
  // ...
 
}