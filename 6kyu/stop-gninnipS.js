function spinWords(string){
    let splitted = string.split(" ")
    splitted.forEach((word, i) => {
        if(word.length>=5){
            splitted.splice(i,1,word.split("").reverse().join(""))
        }
    })

    return splitted.join(" ")
  }