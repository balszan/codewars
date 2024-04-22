function noOdds( values ){
    let result = []

    values.forEach(element => {
        if(element%2==0) {
            result.push(element)
        }
    })

    return result
  }