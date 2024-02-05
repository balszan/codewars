function twoOldestAges(ages){
    ages.sort((a,b) => a-b)
    let result = []
    result.push(ages.pop())
    result.push(ages.pop())
    result.sort((a,b) => a-b)
    return result
}