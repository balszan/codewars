function findOutlier(integers){
    let result
    let evenCounter = 0
    let oddCounter = 0


    integers.forEach((integer) => {
        if(integer%2==0) {
            evenCounter++
        } else if (integer%2!=0) {
            oddCounter++
        }
    })

    if(evenCounter>oddCounter) {
        integers.forEach((integer) => {
            if(integer%2!=0) {
                result = integer
            }
        })
    } else {integers.forEach((integer) => {
        if(integer%2==0) {
            result = integer
        }
    })
    }
    


    return result
  }

