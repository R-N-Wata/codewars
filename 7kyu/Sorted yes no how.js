function isSortedAndHow(arr) {
   
  const ascend = [...arr].sort((a, b) => a-b).join('')
  const descend = [...arr].sort((a,b) => b-a).join('')
  
  if(arr.join('') === ascend) return 'yes, ascending'
  else if (arr.join('') === descend) return 'yes, descending'
  else return 'no'

 
}
