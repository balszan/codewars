function minValue(values){
    values.sort((a,b) => a-b)
    let holder = new Set
    values.forEach(value => {
        holder.add(value)
    })
    let result = ''
    holder.forEach(number => {
        result = result.concat(number)
    })
    return Number(result)
  }