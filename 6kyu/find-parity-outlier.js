function findOutlier(integers){
    let odds = integers.filter((x) => x%2!=0)
    let result
    if(odds.length>1) {
      integers.forEach((number) => {
        if(number%2==0) {
            result = number
        }
      })
    } else {
        integers.forEach((number) => {
            if(number%2!=0) {
                result = number
            }
          })
    }
    return result

  }
