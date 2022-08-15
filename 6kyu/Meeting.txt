function meeting(s) {
    // your code
//   change s to array and words to capital
  s = s.split(';').map(el => el.split(':').reverse().map(el => el.toUpperCase()))
  
//   sort last name, if the same sort first name
  const sorted = s.sort((a, b) => {
    let nameA = a[0]
    let nameB = b[0]
    if(nameA <  nameB){
      return -1 
    }else if(nameA > nameB){
      return 1
    }else if(nameA == nameB){
      nameA = a[1]
      nameB = b[1]
      
      if(nameA < nameB) return -1
      else if(nameA > nameB) return 1
      else return 0
    }
  })
  

  return sorted.map(el => el.map((w, i) => {
    if(i ===1) return w = ` ${w}`
    else return w
  })).map(el => el = `(${el})`).join('')
}
