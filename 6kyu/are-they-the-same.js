function comp(array1, array2) {
    if (array1 == null || array2 == null) return false
    
    const squaredArray1 = array1.map(num => num * num)
    const sortedArray1 = squaredArray1.sort((a, b) => a - b)
    const sortedArray2 = array2.sort((a, b) => a - b)
    
    return sortedArray1.every((num, index) => num === sortedArray2[index])
  }