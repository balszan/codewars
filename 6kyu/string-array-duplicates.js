function dup(s) {
    return s.map(str => {
        let result = ''
        for(let i=0; i<str.length; i++) {
            if(str[i] !== str[i+1]) {
                result += str[i]
            }
        }
        return result
    })

}