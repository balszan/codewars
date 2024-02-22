function solve(s){
    let upperCase = []
    let lowerCase = []

    s.split("").forEach(letter => {
        if(letter.toUpperCase() == letter) {
            upperCase.push(letter)
        } else if (letter.toLowerCase() == letter) {
            lowerCase.push(letter)
        }
    })

    if(lowerCase.length>=upperCase.length) {
        return s.toLowerCase()
    } else {
        return s.toUpperCase()
    }

}