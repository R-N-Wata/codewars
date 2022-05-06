function momentOfTimeInSpace(moment) {
  //coding and coding..
  let nums = [1,2,3,3,4,5,6,7,8,9]
  let space = moment.replace(/[1-9]/g, '').length
  let time = moment.split('').filter(el => nums.includes(Number(el))).reduce((a,b) => Number(a)+Number(b))
  return (time > space) ? [false, false, true]: (time < space) ? [true, false, false]: [false, true, false]
  
}