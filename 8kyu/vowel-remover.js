function shortcut (string) {
    let resultArray = string.split("")
    resultArray.forEach((letter, index) => {
        if(letter == "a" || letter == "o" || letter == "i" || letter == "e"|| letter == "u") {
            resultArray.splice(index, 1)
        }
    })
    return resultArray.join("")
  }