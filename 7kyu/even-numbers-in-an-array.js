function evenNumbers(array, number) {
    let evenNumbers = []
    for(i=0;i<array.length;i++) {
        if(array[i]%2==0) {
            evenNumbers.push(array[i])
        }
    }

    return evenNumbers.splice(number*-1)

  }