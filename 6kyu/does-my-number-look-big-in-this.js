function narcissistic(value) {
    let valueArray = value.toString().split("")
    let result = valueArray.reduce((acc,c) => acc+c**valueArray.length,0)
    if(result==value) {
        return true
    } else {
        return false
    }
  }