function countSheeps(sheep) {
    let counter=0;
    sheep.forEach((sheep) => {
      if(sheep==true) {
        counter+=1;
      }
    })
    return counter
  }