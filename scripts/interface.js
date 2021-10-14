document.addEventListener('DOMContentLoaded', () => {

    let resetRoundBtn = document.querySelector(".resetRound");

    resetRoundBtn.addEventListener("click", resetRound);

    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    });
});

function handleClick(event) {
    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {
        setTimeout(() => {
            alert('O jogo acabou - O vencedor foi o player ' + playerTime);
            resetRound();
        }, 20)
    };

    if (isDraw()) {
        setTimeout(() => {
          alert("O jogo terminou em empate.");
          resetRound();
        }, 30);
    };
    
    updateSquare(position);
}

function updateSquare(position){
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`;
}

function resetRound() {
    board.fill("");
    for (let position = 0; position < board.length; position++){
      updateSquare(position);
    }
    playerTime = 0;
    gameOver = false;
}

