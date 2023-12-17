function duplicateCount(text) {
    let occurrences = new Map()
    let textArray = text.toLowerCase().split("")
    let counter = 0
    textArray.forEach((letter) => {
        if(occurrences.get(letter)==undefined) {
            occurrences.set(letter, 1)
        } else {
            occurrences.set(letter, occurrences.get(letter)+1)
        }
    })

    occurrences.forEach((value,key) => {
        if(value>1) {
            counter = counter+1
        }
    })
    return counter

}

console.log(duplicateCount("aabbcde"))
console.log(duplicateCount("Indivisibility"))