function declareWinner(fighter1, fighter2, firstAttacker) {
 
  
  //loop => while health is > 0
  let f1Health = fighter1.health
  let f2Health = fighter2.health
  let winner = []

     while(f1Health > 0 && f2Health > 0){

        f2Health -= fighter1.damagePerAttack
         f1Health -= fighter2.damagePerAttack
       }

    if(f1Health <= 0 && f2Health <= 0){
      return firstAttacker
    }else if(f1Health <= 0){
      return fighter2.name
    }else{
      return fighter1.name
    }

  
  
}