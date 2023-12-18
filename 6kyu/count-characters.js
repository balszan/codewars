function count(string) {
    let result = new Map()
    string.split("").forEach((letter) => {
        if(result.get(letter)==undefined) {
            result.set(letter,1)
        } else {
            result.set(letter,result.get(letter)+1)
        }
    })
    return Object.fromEntries(result)
  }