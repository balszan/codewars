function cakes(recipe, available) {
    let maxCakes = Infinity
  
    for (let ingredient in recipe) {
      if (available[ingredient]) {
        const numCakes = Math.floor(available[ingredient] / recipe[ingredient])
        maxCakes = Math.min(maxCakes, numCakes)
      } else {
        return 0
      }
    }
  
    return maxCakes === Infinity ? 0 : maxCakes
  }