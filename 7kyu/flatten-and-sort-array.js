"use strict";

function flattenAndSort(array) {
    let result = [].concat(...array)
    return result.sort((a,b) => a-b)
}