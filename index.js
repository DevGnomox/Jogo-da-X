const cell = document.querySelectorAll('.cell');
const player1Score = document.querySelector('.player1Score');
const player2Score = document.querySelector('.player2Score');
const restartBtn = document.querySelector('.restart');

const winCombinations = [
    [0, 1, 2],
    [0, 3, 6],
    [6, 7, 8],
    [2, 5, 8],
    [1, 4, 7],
    [3, 4, 5],
    [0, 4, 8],
    [2, 4, 6],
]

let player1 = [];
let player2 = [];

let score = {
    player1: 0,
    player2: 0,
}

let flag = true;

for(let i = 0; i < cell.length; i++) {
    cell[i].addEventListener('click', () => {
        if(flag === true) {
            addCellsPlayer1(i);
        }else {
            addCellsPlayer2(i);
        }
        checkWinner();
    })
}

function addCellsPlayer1(i) {
    cell[i].innerHTML = "X";
    player1.push(i);
    flag = false;
}
function addCellsPlayer2(i) {
    cell[i].innerHTML = "O";
    player2.push(i);
    flag = true;
}

function checkWinner() {
    winCombinations.find((item) => {
        if(item.filter((i) => player1.includes(i).length === 3)) {
            alert("Player 1 Won");
            score.player1++;
            drawScore();
            clearField();
            return item;
        } else if(item.filter((i) => player2.includes(i).length === 3)) {
            alert("Player 2 Won");
            score.player2++;
            drawScore();
            clearField();
        }
        return
    })
}

function drawScore() {
    player1ScoreSpan.innerHTML = "Player 1: " + score.player1;
    player2ScoreSpan.innerHTML = "Player 2: " + score.player2;

}
drawScore();

function clearField() {
    for(let i = 0; i < cell.length; i++) {
        cell[i].innerHTML = "";
    }
    player1 = [];
    player2 = [];
    flag = true;

}

restartBtn.addEventListener('click', () => {
    clearField();
})