function divisibleBy(numbers, divisor){
let result = []
numbers.forEach(number => {
    if(number%divisor==0) {
        result.push(number)
    }
})
return result
}