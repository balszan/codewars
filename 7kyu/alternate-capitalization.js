function capitalize(s){
    let resultOne = ''
    let resultTwo = ''
    let sArr = s.split("")

    sArr.forEach((letter, index) => {
        if(index%2==0) {
            resultOne += letter.toUpperCase()
            resultTwo += letter.toLowerCase();

        } else {
            resultOne += letter.toLowerCase();
            resultTwo += letter.toUpperCase();
        }
    })


    let finalResult = [resultOne, resultTwo]
    return finalResult
  }