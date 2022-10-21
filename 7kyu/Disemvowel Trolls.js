function disemvowel(str) {

  return [...str].filter(l => !'aeiou'.includes(l.toLowerCase())).join('')
}
