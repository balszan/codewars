function isSortedAndHow(array) {
    let ascArray = array.toSorted((a,b) => a-b)
    let descArray = array.toSorted((a,b) => b-a)

    if(array === ascArray) {
        return "yes, ascending"
    } else if (array === descArray) {
        return "yes, descending"
    } else {
        return 'no'
    }
}