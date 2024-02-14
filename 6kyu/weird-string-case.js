function toWeirdCase(string){
    let stringArr = string.split("")
    let result = []
    let wordIndex = 0
    
    for(i=0;i<stringArr.length;i++) {
        if(stringArr[i] == " ") {
            result.push(stringArr[i])
            wordIndex = 0
        } else if(wordIndex%2==0) {
            result.push(stringArr[i].toUpperCase())
            wordIndex++
        } else {
            result.push(stringArr[i].toLowerCase())
            wordIndex++
        }
    }
    return result.join("")
  }