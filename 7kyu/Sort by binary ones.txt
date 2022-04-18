const sortByBinaryOnes = list =>
  list.sort((a, b) => b.toString(2).replace(/0/g, ``).length - a.toString(2).replace(/0/g, ``).length || a - b);