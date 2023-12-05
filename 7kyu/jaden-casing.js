String.prototype.toJadenCase = function () {
    let arrayWords = this.split(" ")
    let resultArray = []
    arrayWords.forEach((word) => {
        resultArray.push(word[0].toUpperCase()+word.substring(1))
    })
    return resultArray.join(" ")
  }