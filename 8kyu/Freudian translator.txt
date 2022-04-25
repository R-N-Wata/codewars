function toFreud(string) {
  //PREP
  
  // a string , can also be no params, or empty string
  // Return  - a string
  // 'some word ' => 'sex sex'
  //split string
  // loop - map and change string
return string.length === 0 ? '' :string.split(' ').map(word =>word = 'sex').join(' ')
}