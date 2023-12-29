function sumArray(array) {
    if(array == null || array.length<2 || Array.isArray(array)) {
        return 0
    } else {
        let newArray = array.sort((a,b) => a-b)
        newArray.splice(0,1)
        newArray.splice(newArray.length-1,1)
        return newArray.reduce((acc,c) => acc+c,0)
    }
    
}