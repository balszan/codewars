var number=function(array){
    let result = []
    array.forEach((element, index) => {
        result.push(String(index+1 + ": " + element))
    })
    return result
  }