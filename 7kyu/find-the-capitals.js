var capitals = function (word) {
	let result = []

    let wordArr = word.split("")

    wordArr.forEach(element => {
        if(element===element.toUpperCase()) {
            result.push(wordArr.indexOf(element))
        }
    })

    return result 
};