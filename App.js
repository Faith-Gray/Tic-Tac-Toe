const squares = document.querySelectorAll('[data-square]');
const P1 = 'X'
const P2 = 'O'
// const gameBoard = (() => {
//     boardArray = new Array(9);
// });
boardArray = new Array(9);

console.log(boardArray.length);
squares.forEach(square => {
    square.addEventListener('click', squareClicked, {once: true})
});

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [6, 4, 2],
    [0, 4, 8]
]

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

