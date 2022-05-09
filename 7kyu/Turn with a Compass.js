function direction(facing, turn){
  // your code here
  
  const arr = 'N NE E SE S SW W NW'.split(' ')
  
  return arr[(arr.indexOf(facing) + Math.floor(turn / 45 ) + 1080) % 8];
}
