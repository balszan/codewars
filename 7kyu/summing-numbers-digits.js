function sumDigits(number) {
    let strArr = String(number).split("")
    let numArr = strArr.map((num) => Number(num))
    return numArr.reduce((acc,c) => +acc+ +c,0)
}
console.log(sumDigits(-32))