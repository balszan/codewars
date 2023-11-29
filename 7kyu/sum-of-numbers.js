function getSum(a, b) {
    let sum = 0

    if(a==b) {
        return a
    } else {
        if(a<b) {
            for(i=a;i<=b;i++){
                sum=sum+i
            }
            return sum

        } else if(a>b){
            for(i=b;i<=a;i++){
                sum=sum+i
        }
        
        return sum
    }
   
 }
}