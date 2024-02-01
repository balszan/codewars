function abbrevName(name){
    let nameArr = name.split(" ")
    let result = []
    nameArr.forEach(word => {
        result.push(word[0].toUpperCase())
    })
    return result.join(".")
  }