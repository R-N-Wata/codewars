function findMissingLetter(array)
{
 
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  (array[0] === array[0].toUpperCase())? alphabet=alphabet.toUpperCase(): alphabet
  
  const start = alphabet.indexOf(array[0])
  const end = alphabet.indexOf(array[array.length-1])
  const arrInAlpha = alphabet.slice(start, end )
  
  let missing = [...arrInAlpha].filter(el => !array.includes(el)).join('')
  
 return missing[missing.length-1]
  
}