function removeDuplicateWords (s) {
    let removedDuplciates = new Set()
    let sArr = s.split(" ")
    let result = []
    sArr.forEach(word => {
        removedDuplciates.add(word)
    })

    removedDuplciates.forEach(element => {
        result.push(element)
    })

    return result.join(" ")

  }