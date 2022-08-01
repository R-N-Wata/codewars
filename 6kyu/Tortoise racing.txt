function race(v1, v2, g) {
    // your code
  
  if(v1 > v2) return null
  const speedDiff = v2 -v1
  const hours = g / speedDiff
  const strHours = hours.toString()
  const minutes = isInt(hours) ? 0:  +[...strHours].map((n, i) => {
    if (i < strHours.indexOf('.'))return '0'
    return n
  }).join('') * 60
  const strMinutes = minutes.toString()
  const seconds = isInt(minutes) ? 0: Math.floor(+[...strMinutes].map((n, i) => {
    if (i < strMinutes.indexOf('.'))return '0'
    return n
  }).join('') * 60)
  return [Math.trunc(hours), seconds === 59 ? Math.trunc(minutes) +1:Math.trunc(minutes) 
          , seconds === 59 ? 0: seconds]
//   return minutes
  
}