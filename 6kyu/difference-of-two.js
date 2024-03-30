function twosDifference(input){
    result = []
    input.sort((a,b) => a-b)
    for(i=0;i<input.length;i++) {
        for(x=0;x<input.length-1;x++) {
            if(input[i]-input[x]==2) {
                let resultArr = [input[i],input[x]]
                result.push(resultArr.sort((a,b) => a-b))
            }
        }        
    }
    return result
   }