function pigIt(str){
    let strArr = str.split(" ")
    let result = []
    let punctuation = ['!',',','.',';','?']

    for(i=0;i<strArr.length;i++) {
        if(!punctuation.includes(strArr[i])) {
            result.push(strArr[i].substring(1,strArr[i].length).concat(strArr[i].charAt(0)).concat("ay"))

        } else {
            result.push(strArr[i])
        }
    }

    return result.join(" ")
  }