function mxdiflg(a1, a2) {
    if(a1.length==0 || a2.length==0) {
        return -1
    }
        
    let maxDiff = 0

        
        for (let x of a1) {
            for (let y of a2) {
                let diff = Math.abs(x.length - y.length)
                
                if (diff > maxDiff) {
                    maxDiff = diff
                }
            }
        }
        
        return maxDiff
    }