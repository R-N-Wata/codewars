function validPhoneNumber(phoneNumber){
  //TODO: Return whether phoneNumber is in the proper form
  
  const nums = '1234567890'
  
  let result = []
  
  for (let i = 0; i < phoneNumber.length; i++){
    if (i == 0 && phoneNumber[i] == '(') result.push(true) 
    else if((i == 1 || i == 2 || i == 3 || i==6 || i==7 || i==8 ||i ==10 ||i==11||i==12|| i==13) && nums.includes(phoneNumber[i])) result.push(true)
    else if (i == 4 && phoneNumber[i] == ')') result.push(true)
    else if(i == 5 && phoneNumber[i]== ' ')result.push(true)
    else if(i ==9 && phoneNumber[i] == '-')result.push(true)
    else result.push(false)
  }
  return result.every(el => el)
}

