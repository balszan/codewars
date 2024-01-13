function position(letter){
    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y','Z']
    let result = 0


    alphabet.forEach((element, i) => {
        if(letter.toUpperCase()==element) {
            result = i+1
        }
    })


    return "Position of alphabet: " + result
}