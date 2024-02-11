function titleCase(title, minorWords) {
    if(title) {
        if (typeof minorWords === "undefined") {
            minorWords = ""
        } 
        let minorWordsArr = minorWords.toLowerCase().split(" ")
        let titleArr = title.split(" ")
        let result = []
    
        titleArr.forEach(word => {
            if(minorWordsArr.includes(word.toLowerCase()) && titleArr.indexOf(word)!=0) {
                result.push(word.toLowerCase())
            } else {
                result.push(word[0].toUpperCase() + word.substring(1,word.length).toLowerCase())
            }
        })
    
        return result.join(" ")
    } else {
        return ""
    }
    
    
}