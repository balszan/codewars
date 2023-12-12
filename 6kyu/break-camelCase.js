function solution(string) {
    let stringArr = string.split("")

    return stringArr.map((el) => {
        if(el == el.toUpperCase()) {
            el = " " + el
        }
        return el
    }).join("")

    }
