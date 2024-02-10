function sumOfDifferences(arr) {
    if(arr.length == 0 || arr.length == 1) {
        return 0
    }
    arr.sort((a,b) => b-a)
    let result = []
    arr.forEach((number, index) => {
            result.push(number-arr[index+1])
    })
    result.pop()
    return result.reduce((a,b) => a+b,0)
}