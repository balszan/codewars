function firstNonRepeatingLetter(s) {
    let counter = new Map()
    let sArr = s.split("")

    sArr.forEach(letter => {
      if(!counter.has(letter.toLowerCase())) {
        counter.set(letter.toLowerCase(), 1)
      } else {
        counter.set(letter.toLowerCase(), counter.get(letter.toLowerCase())+1)
      }
    })
    
    for(i=0;i<sArr.length;i++) {
        let currentLetter = sArr[i]
      if (counter.get(currentLetter.toLowerCase()) === 1) {
        return currentLetter
      }
    }

        return ""
    
  }