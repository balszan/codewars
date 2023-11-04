function countPositivesSumNegatives(input) {
    let positive=0;
    let negative=0;
  
  if(input==[] || input==null || input==0) {
    return []
  } else {
    
  
      
    input.forEach((element) => {
      if(element<0) {
        negative+=element
      } else if (element>0){
        positive+=1
      }
    })
    
    let result = []
    result.push(positive)
    result.push(negative)
    
    return result
   } 
  }