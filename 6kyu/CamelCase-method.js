String.prototype.camelCase=function(){
    let strArr = this.split(" ")
    let result = []
    strArr.forEach(word => {
        result.push(word.charAt(0).toUpperCase()+word.substring(1,word.length))
    })
    return result.join("")
  }