function defineSuit(card) {
  // good luck
  
  return card.includes('♣') ? 'clubs':card.includes('♦') ? 'diamonds':card.includes('♥') ? 'hearts':'spades'
}