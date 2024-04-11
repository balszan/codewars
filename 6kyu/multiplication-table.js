multiplicationTable = function(size) {
    let result = []

    for(let i = 1; i <= size; i++) {
        let row = []
        for(let x = 1; x <= size; x++) {
            row.push(x * i)
        }
        result.push(row)
    }
    return result
}
