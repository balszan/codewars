function strCount(str, letter){  
    let counter = 0
    str.split("").forEach((lettero) => {
       if(letter == lettero) {
        counter++
       }
    })

    return counter
  }