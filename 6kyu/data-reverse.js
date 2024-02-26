function dataReverse(data) {
    let chunkArr = []

    for(let i=0;i<data.length;i+=8) {
        chunkArr.push(data.slice(i,i+8))
    }
    
    return chunkArr.reverse().reduce((acc, val) => acc.concat(val), [])
  }
