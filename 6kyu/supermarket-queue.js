function queueTime(customers, n) {
    let arr = []
    for(let i=0;i<n;i++) {
        arr[i]=0
    }
    for(let i=0;i<customers.length;i++) {
        arr[0] += customers[i]
        console.log("Step one: " + arr)
        arr.sort((a,b) => a-b)
        console.log("Step two: " + arr)
    }

    
    return arr[arr.length-1]
  }