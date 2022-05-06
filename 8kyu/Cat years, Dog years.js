var humanYearsCatYearsDogYears = function(humanYears) {
  // Your code here!
  let cat = 0
  let dog = 0
  for (let i =1; i <= humanYears; i++){
    if (i === 1){
      cat = cat + 15;
      dog += 15
    }else if (i === 2){
      dog += 9
      cat +=9
    }else{
       cat += 4
    dog += 5
    }
   
  }
  return [humanYears,cat,dog];
  

}