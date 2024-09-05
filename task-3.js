function makeAverage(integer) {

    let average = 0;
    let sum = 0;

    for (let integer of integers) {
        sum = sum + integer;
    }
    average = sum / integers.length;
    return average
}

let integers = [10, 12, 15, 10]
let output = makeAverage(integers)
console.log("Average Number of this array is ", output)