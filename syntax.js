
function myFunction() {
    console.log("5 * 5 = 25")
    console.log("10 / 2 = 5")

}

myFunction();


function sum(x, y) {
    const result = x + y;
    return result;
}

const total = sum(5, 8);
console.log(total)

function playingCricket(bat, ball, stump) {
    console.log(`tomar ekta ${bat} bat thaka lagbei lagbe`)
    console.log(`I want to bowling with ${ball} ball`)
    console.log(`${stump} chara khelba kmne monu`)


    return "cricket khelte chaile egula lagbei lagbe";
}

let result = playingCricket("Adidas", "Kokkaburra", "Stumppp")
console.log(result)