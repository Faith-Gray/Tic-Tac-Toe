const squares = document.querySelectorAll('[data-square]');

const gameBoard = (() => {
    boardArray = new Array(9);
})();

squares.forEach(square => {
    square.addEventListener('click', squareClicked, {once: true})
});

function squareClicked() {
    console.log('clicked');
    //mark x or o
    //check for win or tie
    //change turn

};

//const playRound = 
//p1 pick
//checkWin()
//p2 pick checkWin()
//have a variable for whose turn it is. 
//after every click have it swap turns 
// DUH. still not sure how to use factories though but fuck that
//how do I get the cells of the grid to correspond with the array

