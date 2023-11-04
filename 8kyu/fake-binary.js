function fakeBin(x){
    let splitted = x.toString().split('')

    let newArray = []
    splitted.forEach((x) => {
      if(x<5) {
        x=0
        newArray.push(0)
      } else {
        newArray.push(1)
      }
    })
    return newArray.join("")
    
  }