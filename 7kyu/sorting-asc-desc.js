function isSortedAndHow(array) {
    let ascArray = array.slice().sort((a,b) => a-b)
    let descArray = array.slice().sort((a,b) => b-a)

    if (array.every((value, index) => value === ascArray[index])) {
        return "yes, ascending"
    } else if (array.every((value, index) => value === descArray[index])) {
        return "yes, descending"
    } else {
        return "no"
    }
}