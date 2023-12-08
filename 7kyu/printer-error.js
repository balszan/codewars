function printerError(s) {
    let errors = ["n","o","p","q","r","s","t","u","v","w","x","y","z"]
    let errorCounter = 0
    let printerString = s.split("")
    printerString.forEach((letter) => {
        if(errors.includes(letter)) {
            errorCounter++
        }
    })
    return errorCounter + "/" + printerString.length
}
