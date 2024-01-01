function findAverage(array) {
    if(array.length>0) {
        return array.reduce((acc,c) => acc+c)/array.length
    } else {
        return 0
    }
  }