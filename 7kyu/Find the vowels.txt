

function vowelIndices(word){

  //your code here

  const VOWELS = ['a', 'e', 'i', 'o', 'u', 'y'];

  const arr = []

  word.toLowerCase().split('').forEach((l, i) => {

    if (VOWELS.includes(l)){
      arr.push(i + 1)
    }
  })

  return arr

}