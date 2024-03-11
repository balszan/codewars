function switcheroo(x){
    let result = []
    let xArr = x.split("")

    xArr.forEach(letter => {
        if(letter=='a') {
            result.push('b')
        } else if (letter=='b') {
            result.push('a')
        } else {
            result.push(letter)
        }
    })

    return result.join("")
}