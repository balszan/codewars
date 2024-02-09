function maxMultiple(divisor, bound){
    let result = 0

    for(i=0;i<=bound;i++) {
        if(i%divisor==0) {
            result = i
        }
    }

    return result
  }