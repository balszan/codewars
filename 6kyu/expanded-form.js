function expandedForm(num) {
    let result = [];
    let numArr = num.toString().split("");
    let counter = numArr.length;

    numArr.forEach(number => {
        if (number != '0') {
            result.push(number + '0'.repeat(counter-1));
        }
        counter--;
    });

    return result.join(" + ");
}