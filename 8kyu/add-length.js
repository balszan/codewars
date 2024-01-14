function addLength(str) {
   let result = []
   str.split(" ").forEach(element => {
        result.push(element + " " + element.length)
   })
   return result
    }
    