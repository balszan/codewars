function minMax(arr){
    let result = []
    let minimum = Math.min(...arr)
    let maximum = Math.max(...arr)
    result.push(minimum,maximum)
    return result
  }
