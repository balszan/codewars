function arrayPlusArray(arr1, arr2) {
    let bigArr = arr1.concat(arr2)
    return bigArr.reduce((acc,c) => acc+c,0)
  }