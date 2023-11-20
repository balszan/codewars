function removeSmallest(numbers) {
    if(numbers.length==0) {
        return []
    } else {
        let lowest = numbers[0]
        numbers.forEach((number) => {
            if(number<lowest) {
                lowest = number
            }
        })
     
        return numbers.toSpliced(numbers.indexOf(lowest),1)
    }
    
  }