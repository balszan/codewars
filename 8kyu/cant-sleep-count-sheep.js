var countSheep = function (num){
    let result = []
    for(i=1;i<=num;i++) {
        result.push(i + " sheep...")
    }
    return result.join("")
  }