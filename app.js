winCount = 0;
lossCount = 0;

function score() {
document.getElementById("wins").innerHTML = winCount;
document.getElementById("losses").innerHTML = lossCount;
}
function minesweeper() {
    alert("Welcome to Minesweeper! Choose to walk on the left box or right box. Remember! One of them has a bomb under it! If you hit a bomb you lose!")
    confirm("Do you understand the rules? If so, click continue to begin!")
    var stepOne = prompt("Would you like to go left or right? (Make sure your answer is lowercase)")
    if (stepOne == "left") {
        stepTwoFn()
    } else {
        alert("BOOM! You hit a bomb! Play again!")
        lossCount++
        document.getElementById("losses").innerHTML = lossCount;
    }
}
function stepTwoFn() {
    alert("You made it to the next set of squares! Good job!")
    var stepTwo = prompt("Would you like to go left or right? (Make sure your answer is lowercase)")
    if (stepTwo == "left") {
        stepThreeFn()
    } else {
        alert("BOOM! You hit a bomb! Play again!")
        lossCount++
        document.getElementById("losses").innerHTML = lossCount;
    }
}
function stepThreeFn() {
    alert("You made it to the next set of squares! Good job!")
    var stepThree = prompt("Would you like to go left or right? (Make sure your answer is lowercase)")
    if (stepThree == "right") {
        youWin()
    } else {
        alert("BOOM! You hit a bomb! Play again!")
        lossCount++
        document.getElementById("losses").innerHTML = lossCount;
    }
}
function youWin() {
    alert("You passed all the levels! Good job! Have a nice day")
    winCount++
    document.getElementById("wins").innerHTML = winCount;
}