function sameCase(a, b){
  let alpha = 'abcdefghijklmnoqrstuvwxyzpABCDEFGHIJKLMNOPQRSTUVWXYZ'
  return  ( !alpha.includes(b) || !alpha.includes(a)) ? -1 :(a.toLowerCase() === a && b.toLowerCase()===b) || (a.toUpperCase() === a && b.toUpperCase() === b)? 1 : 0    
}