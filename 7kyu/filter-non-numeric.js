function multiplyAndFilter(array, multiplier){
    let filteredArr = array.filter((el) => typeof el == "number")
    return filteredArr.map((el) => el*multiplier)
  }