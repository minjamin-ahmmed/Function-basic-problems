function doMath(num1, num2) {
    const sum = num1 + num2;
    const subtract = num1 - num2;
    const multiply = sum * subtract;
    const div = multiply / 2;

    return div;

}


console.log(doMath(20, 10))


//Even Number 
function evenNumber(number) {
    if (number % 2 === 0) {
        return "This is an even Number"
    }
    else {
        return "This is an odd Number"
    }
}

console.log(evenNumber(13))


// Odd Number
function oddNumber(number) {
    if (number % 2 !== 0) {
        return "This is an odd Number"
    }
    else {
        return "This is an even Number"
    }
}

console.log(oddNumber(20))