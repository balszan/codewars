function findUniq(arr) {
    arr.sort()
    if(arr[0]!=arr[1]) {
        return arr[0]
    } else {
        return arr[arr.length-1]
    }
  }
  