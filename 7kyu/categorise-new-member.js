function openOrSenior(data){
    let result = []
    data.forEach(member => {
        if(member[0]>=55&&member[1]>7) {
            result.push("Senior")
        } else {
            result.push("Open")
        }
    })
    return result
  }