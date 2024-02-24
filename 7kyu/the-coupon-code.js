function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    let current = Date.parse(currentDate)
    let expired = Date.parse(expirationDate)

  return enteredCode===correctCode && current <= expired

}

