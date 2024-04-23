function alphabetWar(fight) {
    let leftSide = new Map([['w',4],['p',3],['b',2],['s',1]])
    let rightSide = new Map([['m',4],['q',3],['d',2],['z',1]])
    let fightArr = fight.split("")
    let leftSideScore = 0
    let rightSideScore = 0

    fightArr.forEach(letter => {
        if(leftSide.has(letter)) {
            leftSideScore+=leftSide.get(letter)
        }
        if(rightSide.has(letter)) {
            rightSideScore+=rightSide.get(letter)
        }
    })

    if(rightSideScore>leftSideScore) {
        return "Right side wins!"
    } else if(leftSideScore>rightSideScore) {
        return "Left side wins!"
    } else {
        return "Let's fight again!"
    }

}