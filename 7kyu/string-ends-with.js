function solution(str, ending){
    let endingLength = ending.length
    if(str.substring(str.length-endingLength) == ending) {
        return true
    } else {
        return false 
    }
  }

  console.log(solution('abcde', 'cde'))