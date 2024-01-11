function checkExam(array1, array2) {
    let counter = 0

   array2.forEach((letter,index) => {
    if(letter==array1[index]) {
        counter = counter+4
    } else if(letter!=array1[index] && letter!="") {counter = counter-1}
   })

    return counter<0 ?  0 : counter
    
   }