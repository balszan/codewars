function vowelIndices(word){
    let vowels = ["a","e","i","o","u","y"]
    let result = []
    let wordArr = word.toLowerCase().split("")

    for(i=0;i<wordArr.length;i++) {
        if(vowels.includes(wordArr[i])) {
            result.push(i+1)
        }
    }
    return result
  }