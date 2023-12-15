function smallEnough(a, limit){
    if(a.filter((value) => value<=limit).length==a.length) {
        return true
    } else {
        return false
    }
    
}