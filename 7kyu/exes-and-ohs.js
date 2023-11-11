function XO(str) {
    let xsCount = 0
    let osCount = 0

    let newArray = str.toLowerCase().split("")
    newArray.forEach((letter) => {
        if(letter=="x") {
            xsCount +=1
        } else if(letter=="o") {
            osCount+=1
        }
    })

    if(xsCount==osCount) {
        return true
    } else {
        return false
    }

}

