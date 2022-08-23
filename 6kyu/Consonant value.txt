function solve(s) {
  
  const cons = '--bcd-fgh-jklmn-pqrst-vwxyz'
  
  let result = []
  let sum = 0
  
  for(let i = 0; i <= s.length; i++){
    if(cons.includes(s[i])){
      sum += cons.indexOf(s[i])
    }else{
      result.push(sum)
      sum = 0;
    }
  }
  return Math.max(...result)
};
