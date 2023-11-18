function isValidWalk(walk) {
    let nCount = 0
    let sCount = 0
    let wCount = 0
    let eCount = 0


    walk.forEach((direction) => {
        if(direction == "n") {
            nCount++
        } else if (direction== "s") {
            sCount++
        } else if(direction=="w") {
            wCount++
        } else if (direction=="e") {
            eCount++
        }
    })




    if(walk.length==10 && nCount == sCount && wCount == eCount) {
        return true
    } else {
        return false 
    }
  }