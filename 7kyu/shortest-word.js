function findShort(s){

    let wordArray = s.split(" ")
    return wordArray.reduce(function(a,b) {
        return a.length<=b.length ? a : b
    }).length
  
}