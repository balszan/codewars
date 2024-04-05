function firstNonConsecutive (arr) {
    let prev = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== prev + 1) {
            return arr[i]
        }
        prev = arr[i]
    }
    return null
}