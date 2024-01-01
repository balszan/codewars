function betterThanAverage(classPoints, yourPoints) {
    let average = classPoints.reduce((acc,c) => acc+c)/classPoints.length 
    if(average<yourPoints) {
        return true
    } else {
        return false 
    }
  }
  