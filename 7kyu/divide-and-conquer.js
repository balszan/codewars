function divCon(x){
    let numbers = []
    let strings = []

    x.forEach(element => {
        if(typeof element == 'number') {
            numbers.push(element)
        } else if (typeof element == 'string') {
            strings.push(Number(element))
        }
    })

    return numbers.reduce((acc,c) => acc+c,0)-strings.reduce((acc,c) => acc+c,0)
}