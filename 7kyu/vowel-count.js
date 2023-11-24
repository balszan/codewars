function getCount(str) {
    let letterArray = str.split("")
    let vowelCount = 0
    letterArray.forEach((letter) => {
        if(letter=="a" || letter=="e" || letter =="i" || letter=="o" || letter=="u") {
            vowelCount++
        }
    })
    return vowelCount
  }