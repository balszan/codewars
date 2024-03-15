function twoSort(s) {

    let result = []
    let word = s.sort()[0]
    word.split("").forEach(letter => {
        if(letter!=word.split("")[word.length-1]){
            result.push(letter+'***')
        } else {
            result.push(letter)
        }
    })
    return result.join("")

}