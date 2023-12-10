function disemvowel(str) {
    let vowels = ["a","o","e","i","u"]
    return str.split("").filter((letter) => !vowels.includes(letter.toLowerCase())).join("")
  }