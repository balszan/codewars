var number=function(array){
    if(array.length==0) {
        return []
    }

    let result = []

    for(i=0;i<array.length;i++) {
        result.push(i+1+": "+array[i])
    }

    return result

  }