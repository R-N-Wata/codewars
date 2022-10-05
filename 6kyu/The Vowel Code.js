 const vowels = {
    a:1,
    e:2,
    i:3,
    o:4,
    u:5
  }

function encode(str) {

  return [...str].map(l => {
    if(vowels[l]) return vowels[l]
    else return l
  }).join('')
}

function decode(str) {
  const values = Object.values(vowels)
  const keys = Object.keys(vowels)
  return [...str].map(l => {
    if(values.includes(+l)) return keys[values.indexOf(+l)]
    else return l
  }).join('')
}
