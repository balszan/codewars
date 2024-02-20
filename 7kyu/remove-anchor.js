function removeUrlAnchor(url){
    let result = []
    let urlArr = url.split("")

    for(i=0;i<url.length;i++) {
        if(urlArr[i] == "#") {
            break
        }

        result.push(urlArr[i])  
    }

    return result.join("")
  }