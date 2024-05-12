function nbDig(n, d) {
    let count = 0
    
    for (let k = 0; k <= n; k++) {
      const square = k ** 2
      const digits = square.toString()
      
      for (let i = 0; i < digits.length; i++) {
        if (parseInt(digits[i]) === d) {
          count++
        }
      }
    }
    
    return count
  }