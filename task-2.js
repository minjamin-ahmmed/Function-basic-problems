function evenOddMultiply(number) {


    if (number % 2 === 1) {

        let resultOfOdd = number * 2;
        return resultOfOdd
    }
    else if (number % 2 === 0) {
        let resultOfEven = number / 2;
        return resultOfEven;
    }

}

let number = evenOddMultiply(20);
console.log(number)