function longestConsec(strarr, k) {
    const n = strarr.length
    
    if (n === 0 || k > n || k <= 0) {
      return ""
    }
    
    let longestStr = ""
    
    for (let i = 0; i <= n - k; i++) {
      const currentStr = strarr.slice(i, i + k).join("")
      
      if (currentStr.length > longestStr.length) {
        longestStr = currentStr
      }
    }
    
    return longestStr
  }