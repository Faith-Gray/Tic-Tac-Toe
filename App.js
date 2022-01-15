const squares = document.querySelectorAll('[data-square]');
const P1 = 'X'
const P2 = 'O'
const gameBoard = (() => {
    boardArray = new Array(9);
})();

console.log(length.boardArray);
squares.forEach(square => {
    square.addEventListener('click', squareClicked, {once: true})
});

function squareClicked(e) {
    console.log('clicked');
    //placeMark();
    if (turn == P1) {
        e.target.textContent = 'X';
    } else {
        e.target.textContent = 'O';
    }
    changeTurn();
   // e.target.textContent = "X";
    //mark x or o
    //check for win or tie
    //change turn

};

let turn = P1;

function changeTurn() {
    if (turn == P1) {
        turn = P2
    }
    else {turn = P1}
}

function checkWin() {
    boardArray
}

//const playRound = 
//p1 pick
//checkWin()
//p2 pick checkWin()
//have a variable for whose turn it is. 
//after every click have it swap turns 
// DUH. still not sure how to use factories though but fuck that
//how do I get the cells of the grid to correspond with the array

