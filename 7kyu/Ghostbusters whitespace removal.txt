function ghostBusters(building) {

  
    return building.split('').some(el => el === ' ') ? building.replace(/\s/g, ''):"You just wanted my autograph didn't you?"
  }