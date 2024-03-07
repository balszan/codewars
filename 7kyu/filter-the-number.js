var filterString = function(value) {
    let valueArr = value.split("")
    let result = []

    valueArr.forEach(symbol => {
        if(symbol >= '0' && symbol <= '9') {
            result.push(symbol)
        }
    })

    return Number(result.join(""))
  }