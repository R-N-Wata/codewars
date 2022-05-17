function capitalizeWord(word) {
//   word[0].toUpperCase();
  return word.split(' ').map(w => w[0].toUpperCase() + w.slice(1)).join('')
}