module.exports = function check(str, bracketsConfig) {

  let arr = str.split("");

  function findBracket (sign, bracketsConfig){
    for (let i=0; i<bracketsConfig.length; i++){
      if (sign===bracketsConfig[i][0]){
        return bracketsConfig[i];
      }
    }
    return false;
  }

  function counter (arr,lsign,rsign) {
    let counter = 1;
    if (lsign!==rsign){ 
      for (let i=0; i<arr.length; i++){
        if (arr[i]===lsign){
          counter+=1;
        } else if (arr[i]===rsign){
          counter-=1;
        }
        if (counter===0) {
          return i;
        }
      }
    } else {
      for (let i=0; i<arr.length; i++){
        if(arr[i]===lsign) {
            counter-=1;
        }
        if (counter===0){
          return i;
        }
      }
    }
  return -1;
}

  for (let i=0; i<arr.length; i++) {
    let signs = findBracket (arr[i], bracketsConfig);
    let lsign = signs[0];
    let rsign = signs[1];
    arr.shift();
    let rind = counter (arr,lsign,rsign);
    if ((rind!==-1)&&((rind-1)%2)){
      arr.splice(rind, 1);
    } else {
      return false;
    }
    i--;
    
  }
  return true
}
