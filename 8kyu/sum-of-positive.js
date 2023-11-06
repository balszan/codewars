function positiveSum(arr) {
    let counter = 0
  arr.forEach((number) => {
    if(number>0) {
        counter+=number
    }
  });
return counter
}