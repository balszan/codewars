function well(x){
    let goodCounter = 0
    x.forEach(idea => {
        if(idea=="good") {
            goodCounter++
        } 
    })

    if(goodCounter>2) {
        return "I smell a series!"
    } else if(goodCounter>0) {
        return "Publish!"
    } else {
        return "Fail!"
    }
}