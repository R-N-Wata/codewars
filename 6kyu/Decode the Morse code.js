decodeMorse = function(morseCode){
  //your code here
  
  return morseCode.split('  ')
    .map(el => el.split(' ')
    .map(l =>MORSE_CODE[l] ).join('') ).join(' ').trim()
}