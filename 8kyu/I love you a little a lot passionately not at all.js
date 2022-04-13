function howMuchILoveYou(nbPetals) {
    // your code
  
  let arr = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']
  while(nbPetals > arr.length){
      nbPetals = nbPetals-6
    }
  
  return arr[nbPetals -1]
  
  }