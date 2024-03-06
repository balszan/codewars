function XO(str) {
    let counter = new Map
    let strArr = str.toLowerCase().split("")

    strArr.forEach(letter => {
        if(!counter.has(letter)) {
            counter.set(letter,1)
        } else if (counter.has(letter)) {
            counter.set(letter,counter.get(letter)+1)
        }
    })

    console.log(counter)

    if(counter.get("x")==counter.get("o")) {
        return true
    } else {
        return false
    }

}