function points(games) {
    let counter = 0
    games.forEach((game) => {
        let singleResult = game.split(":")
        if(singleResult[0]>singleResult[1]) {
            counter+=3
        } else if(singleResult[0]==singleResult[1]) {
            counter+=1
        }
    });
    return counter
  }