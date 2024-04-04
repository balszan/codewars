function sumOfMinimums(arr) {
    let sum = 0

    arr.forEach(array => {
        sum = sum + array.sort((a,b) => a-b)[0]
    })

    return sum
  }