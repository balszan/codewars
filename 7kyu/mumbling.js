function accum(s) {
    let result = []
    let counter = 0
    let strArr = s.split("")
    strArr.forEach(element => {
        if(element==element.toUpperCase()) {
            result.push(element+element.toLowerCase().repeat(counter))
        } else {
            result.push(element.toUpperCase()+element.repeat(counter))
        }
        result.push("-")
        counter++
    })
    result.pop()
    return result.join("")
}