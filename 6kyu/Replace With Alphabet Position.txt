function alphabetPosition(text) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  
  return text.toLowerCase()
    .replace(' ', '').split('')
    .map(l => alphabet.indexOf(l) === -1 ? '' : alphabet.indexOf(l) + 1 )
    .filter(el => el)
    .join(' ')
}