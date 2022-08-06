// Return the output array, and ignore all non-op characters
function parse( data )
{
  
  let ans = []
  let result= 0
  data = data.split('')
  
  for(let i = 0; i < data.length; i++){
    switch(data[i]){
        case 'i':
        result += 1;
        break;
        case 'd':
        result -= 1;
        break;
        case 's':
        result = Math.pow(result, 2)
        break;
        case 'o':
        ans.push(result);
        break;
        
    }
  }
  
  return ans
  
}