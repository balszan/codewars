function correct(string){
	let charArray = string.split("")
    charArray.forEach((symbol, i) => {
        if(symbol==5) {
            charArray.splice(i,1,"S")
        } else if(symbol==0&&symbol!=" ") {
            charArray.splice(i,1,"O")
        } else if (symbol==1) {
            charArray.splice(i,1,"I")
        }
    })
    return charArray.join("")
}