function cleanString(s) {
    let sArray = s.split("")
    let result = []
    sArray.forEach((symbol) => {
        if(symbol !="#") {
            result.push(symbol)
        } else {
            result.pop()
        }
    })
    return result.join("")
  }