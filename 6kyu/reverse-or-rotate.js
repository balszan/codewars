function revrot(str, sz) {
    if (sz <= 0 || str === "") return ""
    if (sz > str.length) return ""

    let result = ""

    for (let i = 0; i < str.length; i += sz) {
        let chunk = str.slice(i, i + sz)
        if (chunk.length < sz) break

        let sumOfCubes = 0
        for (let digit of chunk) {
            sumOfCubes += Math.pow(parseInt(digit), 3)
        }

        if (sumOfCubes % 2 === 0) {
            result += chunk.split('').reverse().join('')
        } else {
            result += chunk.slice(1) + chunk[0]
        }
    }

    return result
}