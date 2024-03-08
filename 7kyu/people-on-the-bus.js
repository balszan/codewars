var number = function(busStops){
    let gotOn = 0
    let left = 0

    for(i=0;i<busStops.length;i++) {
        gotOn = gotOn+busStops[i][0]
        left = left+busStops[i][1]
    }

    return gotOn-left
  }