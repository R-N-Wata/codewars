String.prototype.isUpperCase = function() {
  // your code here
  
  //:Get primitive copy of string:
  let str = this.valueOf();
  
  return [...str].every(l => l === l.toUpperCase())
  
  
}
