function solution(a, b){
  // your code here
  return a.length > b.length ? b.concat(a,b) : a.concat(b, a)
}
