function squareDigits(num){
    
    
    let numbersArray = num.toString().split("")
    numbersArray.forEach((number, index) => {
        numbersArray[index] = number*number
    })

    let newNumbersArray = parseInt(numbersArray.join(""))
    return newNumbersArray



  }