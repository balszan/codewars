function gimme (triplet) {
    let sortedArr = triplet.toSorted((a,b) => a-b)
    let middleValue = sortedArr[1]
    return triplet.indexOf(middleValue)
}