function oddOrEven(array) {
    let sum = 0
    array.forEach((number) => {
        sum = sum+number
    })

    if(sum%2==0) {
        return "even"
    } else {
        return "odd"
    }
 }