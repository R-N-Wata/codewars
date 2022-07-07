function sortArray(arr) {
  // Return a sorted array.
  
 let odd = arr.filter(el => el % 2 !== 0).sort((a,b) => a-b)


 for(let i = 0; i < arr.length ; i++){
   if(arr[i] % 2 !== 0){
     arr[i] = odd.shift()
   }
 }
 return arr
}