function oddOnesOut(nums) {
    let counter = new Map

    nums.forEach(number => {
        if(counter.has(number)) {
            counter.set(number, counter.get(number)+1)
        } else {
            counter.set(number,1)
        }
    })

    return nums.filter(number => counter.get(number)%2==0)
  }