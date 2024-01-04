function isIsogram(str){
    let letters = new Set()
    for(let char of str.toLowerCase()) {
        if(letters.has(char)) {
            return false
        }
        letters.add(char)
    }
    return true
  }