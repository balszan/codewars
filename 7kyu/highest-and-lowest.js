function highAndLow(numbers){
    let stringsArray = numbers.split(" ")
    let numbersArray = []

    for(i=0;i<stringsArray.length;i++) {
        numbersArray.push(parseInt(stringsArray[i]))
    }



    let lowest = numbersArray[0]
    let highest = numbersArray[0]
    numbersArray.forEach((number) => {
        if(number>highest) {
            highest = number
        } else if (number<lowest) {
            lowest = number
        }
    })

    let result = highest + " " + lowest
    return result
}

