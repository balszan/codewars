function descendingOrder(n){
    let sorted = parseInt(n.toString().split("").sort((a,b) => b-a).join(""))
    return sorted
  }