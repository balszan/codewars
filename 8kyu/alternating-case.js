String.prototype.toAlternatingCase = function () {
    let result = []
    let stringArr = this.split("")

    stringArr.forEach(letter => {
        if(letter == letter.toUpperCase()) {
            result.push(letter.toLowerCase())
        } else if (letter == letter.toLowerCase()) {
            result.push(letter.toUpperCase())
        } else {
            result.push(letter)
        }
    })



    return result.join("")
  }