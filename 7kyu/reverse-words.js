function reverseWords(str) {
    let strArray = str.split(" ")
    let result = []
    strArray.forEach((word) => {
        result.push(word.split("").reverse().join(""))
    })
    return result.join(" ")
  }