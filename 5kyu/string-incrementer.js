function incrementString (strng) {
    const match = strng.match(/(\d*)$/)
    if (!match[0]) {
        return strng + '1'
    }
    const numberPart = match[0];
    const textPart = strng.slice(0, -numberPart.length)
    const incrementedNumber = parseInt(numberPart) + 1
    const leadingZeros = numberPart.length - incrementedNumber.toString().length
    return textPart + '0'.repeat(Math.max(0, leadingZeros)) + incrementedNumber;

  }