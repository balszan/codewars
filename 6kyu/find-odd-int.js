function findOdd(A) {
    let occurrences = new Map()
    A.forEach((number) => {
        if(occurrences.get(number)==undefined) {
            occurrences.set(number, 1)
        } else {
            occurrences.set(number, occurrences.get(number)+1)
        }      
    })

    let result

      occurrences.forEach((value,key) => {
        if((value)%2!=0) {
            result = key
        }
    })
    
    return result 

  }