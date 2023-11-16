function longest(s1, s2) {
    let result = [...new Set(s1+s2)].sort().join("")
    return result
  }

longest("aretheyhere", "yestheyarehere")