function stray(numbers) {
    numbers.sort()
        if(numbers[0]!=numbers[1]) {
            return numbers[0]
        } else if(numbers[numbers.length-1]!=numbers[numbers.length-2]) {
            return numbers[numbers.length-1]
        }
  }