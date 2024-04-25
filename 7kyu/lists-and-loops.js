function inverseSlice(items, a, b) {
    let result = []
   for(i=0;i<items.length;i++) {
    if(i<a || i>=b) {
        result.push(items[i])
    }
   }
    return result
  }