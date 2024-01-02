function countBy(x, n) {
    let result = []
    
    for(i=1;i<=n;i++) {
        result.push(i*x)
        alert(result)
    }

    return result
    

  }

  countBy(1,10)
  countBy(2,5)