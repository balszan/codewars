function doubleChar(str) {
    let strArray = str.split("")
    return strArray.map((x) => x.repeat(2)).join("")
  }
  