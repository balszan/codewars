function mergeArrays(arr1, arr2) {
let bigArr = arr1.concat(arr2)
let filteredArr = bigArr.filter((value,index) => bigArr.indexOf(value) === index)
return filteredArr.sort((a,b) => a-b)
}