function gimmeTheLetters(sp) {
    let alphabet = 'A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z'.split(", ")
    let spArr = sp.split("-")
    
    let startIndex = alphabet.indexOf(spArr[0].toUpperCase())
    let endIndex = alphabet.indexOf(spArr[1].toUpperCase()) + 1
    
    let result = alphabet.slice(startIndex, endIndex)
    
    if (sp === sp.toUpperCase()) {
      return result.join("")
    } else {
      return result.join("").toLowerCase()
    }
  }