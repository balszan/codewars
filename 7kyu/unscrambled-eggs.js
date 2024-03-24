function unscrambleEggs(word){
    return word.replace(/([^aeiou])egg/gi, '$1')
  }