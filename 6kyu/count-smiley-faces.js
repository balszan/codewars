//return the total number of smiling faces in the array
function countSmileys(arr) {
    let smileys = [':)',':D',':-)',':~)',':-D',':~D',';)',';D',';-)',';~)',';-D',';~D']
    let counter = 0
    arr.forEach(smiley => {
        if(smileys.includes(smiley)) {
            counter++
        }
    })
    return counter
  }