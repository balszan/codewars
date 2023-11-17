function wave(str){
    let result = [];
    for (let i = 0; i < str.length; i++) {
      let copy = str.split('');
      if(copy[i] !== ' ') {
      copy[i] = copy[i].toUpperCase()
      result.push(copy.join(''))
      }
    }
    return result
  }