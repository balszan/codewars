function sumDigits(number) {
    let strArr = String(Math.abs(number)).split("")
    let numArr = strArr.map((num) => Number(num))
    return numArr.reduce((acc,c) => +acc+ +c,0)
}