function isPangram(string){
    let alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    let stripperString = string.toUpperCase().replace(/[0-9\.,-\/#!$%\^&\*;:{}=\-_`~()\s]/g,"")
    let result = true

    alphabet.forEach((letter) => {
        if(!stripperString.includes(letter)) {
            result = false
        } 
        
        
    })
    return result
  }