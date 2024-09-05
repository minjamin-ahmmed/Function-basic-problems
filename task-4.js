function countzero(binaryNumber) {

    let numberOfZeroes = " ";
    for (let number of binaryNumber) {
        if (number === "0") {
            numberOfZeroes = numberOfZeroes + number;
        }
    }
    return numberOfZeroes.length - 1;



}

let binaryNumber = "101010000011"
let output = countzero(binaryNumber)

console.log(output)