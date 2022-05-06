function score(n){
  // Good Luck!
  return n > 0 ? parseInt(new Number(n).toString(2).replace(/0/g, 1), 2) :0
}