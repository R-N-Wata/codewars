function transpose(song, interval){
  // ...
  
//   Prep
//   song => array of notes, represented in flats and sharps
//   interval => integer 
//  return => an array with transposed notes
//   e.g transpose (['Ab', 'Bb'], 2) => ['A#', 'C']
  
//   declare 2 variables, one sharp other flats
  
  let sharp = 'A A# B C C# D D# E F F# G G#'.split(' ')
  let flats = 'A Bb B C Db D Eb E F Gb G Ab'.split(' ')
//   find if contains flats, if yes change to sharp equi => loop
//   transpose by interval => index
  
 console.log(9%12)
 return song.map(el => {
    if(sharp.includes(el)){
      return el
    }else{
      return sharp[flats.indexOf(el)]
    }
  }).map(el => sharp[(sharp.indexOf(el) + interval +12) % 12])

}