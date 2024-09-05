function oddEven(number) {
    if (number % 2 === 0) {
        return "Even"
    }

    else if (number % 2 === 1) {
        return "Odd"
    }



}

let output = oddEven(42);
console.log(output);