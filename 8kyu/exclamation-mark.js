function remove (string) {
    let result = string.split("")
    if(result.splice(string.length-1,1) == "!") {
        return result.join("")
    } else {
        return string
    }
    
  }