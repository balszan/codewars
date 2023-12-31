function removeEveryOther(arr){
    let result = []
    arr.forEach(element => {
        if(arr.indexOf(element)%2==0) {
            result.push(element)
        }
    })
    return result
  }