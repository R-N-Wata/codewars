function dropCap(n) {

  return n.split(' ').map(w => {
    if (w.length > 2){
     return [...w].map((l, i) => i == 0 ? l.toUpperCase(): l.toLowerCase()).join('')
    }
    return w
  }).join(' ')
}