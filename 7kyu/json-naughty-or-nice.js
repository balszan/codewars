function naughtyOrNice(data) {
    let naughtyCounter = 0
    let niceCounter = 0

    Object.keys(data).forEach(month => {
        Object.values(data[month]).forEach(behavior => {
            if (behavior === 'Naughty') naughtyCounter++
            if (behavior === 'Nice') niceCounter++
        })
    })

    if(naughtyCounter>niceCounter){
        return "Naughty!"
    } else {
        return "Nice!"
    }
  }