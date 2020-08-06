window.addEventListener('DOMContentLoaded', event => {
    const currentPlayerSymbol = 'x'
    // Make a new array, board, that has 9 spots, and fill those spots with ''
    const board = Array(9).fill('');
    let count = 0;
    const player1 = "x";
    const player2 = "o";
    document.getElementById('tic-tac-toe-board').addEventListener('click', event => {
        if (event.target.id.includes('square')) {
            const index = event.target.id[event.target.id.length - 1];
            if (board[index] === '') {
                count++;
                // console.log(board);
                if (count % 2 === 1){
                    board[index] = player1;
                    event.target.innerHTML = '<img src="https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg">';
                    if (count > 4) {
                        checkWin();
                    }
                } else {
                    board[index] = player2;
                    event.target.innerHTML = '<img src="https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg">';
                    if (count > 4) {
                        checkWin();
                    }
                }
            }
        }



    });
    const checkWin = () => {
        if (board[0] === board[1] && board[1] === board[2] && board[2] !== ""){
            console.log(board[0] + "wins");
        }
    }


});
