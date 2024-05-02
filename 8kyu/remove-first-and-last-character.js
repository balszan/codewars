function array(string) {
    let stringArr = string.split(",")
    if(stringArr.length<=2) {
        return null
    }
    stringArr.shift()
    stringArr.pop()
    return stringArr.join(" ")
  }