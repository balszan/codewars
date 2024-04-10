function matrix(array) {
    let counter = 0
    for(i=0;i<array.length;i++) {
        if(array[i][counter]<0) {
            array[i][counter] = 0
        } else if (array[i][counter]>=0) {
            array[i][counter] = 1
        }
        counter++
    }


    return array
}