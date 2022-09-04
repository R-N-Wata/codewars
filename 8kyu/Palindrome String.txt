function isPalindrome(line) {
  const back = [...String(line)].reverse().join('')
  
  return String(line) === back
}