function repeats(arr){
    let counter = new Map()
    arr.forEach(number => {
        if(!counter.has(number)) {
            counter.set(number,1)
        } else {
            counter.set(number,counter.get(number)+1)
        }
    })

    let sum = 0

    arr.forEach(number => {
        if(counter.get(number)==1) {
            sum = sum+number
        }
    })
    return sum
}