function arrayDiff(a, b) {
    let c=[]
  a.forEach((number) => {
    if(!b.includes(number)) {
        c.push(number)
    }
  })
  return c
}

