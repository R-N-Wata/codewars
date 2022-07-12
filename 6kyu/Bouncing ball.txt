function bouncingBall(h,  bounce,  window) {
  // your code here
  
  if(h <= 0 || (bounce <= 0|| bounce >= 1) || window >= h){
    return -1
  }
  
  let count = 0
  while(h > window){
    h = h*bounce
    count++
    if(h > window) count++
  }
  
  return count
}
 