String.prototype.camelCase=function(newStr){
  //your code here
  
  let str = this.valueOf();
  str = (str + newStr).replace('undefined', '').split(' ')
  
  const Lower = 'abcdefghijklmnopqrstuvwxyz'
  const Upper = Lower.toUpperCase()
  
  return str.map(el => {
    const i = Lower.indexOf(el[0])
    return Upper[i] + el.slice(1)
  }).join('').replace('undefined', '')

}