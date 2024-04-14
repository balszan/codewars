function rowWeights(array){
    let teamOne = []
    let teamTwo = []

    for(i=0;i<array.length;i++) {
        if(i%2==0) {
            teamOne.push(array[i])
        } else {
            teamTwo.push(array[i])
        }
    }

    
    let totalWeightOne = teamOne.reduce((acc,c) => acc+c,0)
    let totalWeightTwo = teamTwo.reduce((acc,c) => acc+c,0)

    let result = [totalWeightOne,totalWeightTwo]
    return result

  }

  console.log(rowWeights([100,51,50,100]))