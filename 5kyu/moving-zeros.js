function moveZeros(arr) {
    let zeroArray = []
    arr.forEach(element => {
        if(element===0) {
            zeroArray.push(element)
        }
    })
    let newArr = arr.filter((element) => element!==0)

    return newArr.concat(zeroArray)
  }