function invert(array) {
    let result = []

    array.forEach((number) => {
        result.push(number*-1)
    })

    return result
 }