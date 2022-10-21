var capitals = function (word) {
	// Write your code here
  
  return [...word].map((l, i) => l === l.toUpperCase() ? i : '').filter(el => el !== '')
  
  
};

