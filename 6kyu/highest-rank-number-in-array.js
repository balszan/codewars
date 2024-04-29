function highestRank(arr) {
    let score = new Map();
  
    for (let i = 0; i < arr.length; i++) {
      if (score.has(arr[i])) {
        score.set(arr[i], score.get(arr[i]) + 1);
      } else {
        score.set(arr[i], 1);
      }
    }
  
    let maxFrequency = 0
    let mostFrequentNum = null
  
    for (const [num, frequency] of score.entries()) {
      if (frequency > maxFrequency || (frequency === maxFrequency && num > mostFrequentNum)) {
        maxFrequency = frequency
        mostFrequentNum = num
      }
    }
  
    return mostFrequentNum
  }