window.addEventListener('DOMContentLoaded', event => {
    // Make a new array, board, that has 9 spots, and fill those spots with ''
    const board = Array(9).fill('');
    let count = 0;
    const player1 = "X";
    const player2 = "O";
    const gameStatus = document.getElementById("game-status");
    const game = document.getElementById('tic-tac-toe-board');
    let winner = false;

        game.addEventListener('click', event => {
            if (winner === false){
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
            }
        });


    const checkWin = () => {
        if (board[0] === board[1] && board[1] === board[2] && board[2] !== ""){
            gameStatus.innerHTML = `Winner: ${board[0]}`
            winner = true;
        } else if (board[3] === board[4] && board[4] === board[5] &&  board[5] !== '') {
            gameStatus.innerHTML = `Winner: ${board[3]}`
            winner = true;
        } else if (board[6] === board[7] && board[7] === board[8] && board[8] !== '') {
            gameStatus.innerHTML = `Winner: ${board[6]}`
            winner = true;
        } else if (board[0] === board[3] && board[3] === board[6] && board[6] !== '') {
            gameStatus.innerHTML = `Winner: ${board[0]}`
            winner = true;
        } else if (board[1] === board[4] && board[4] === board[7] && board[7] !== '') {
            gameStatus.innerHTML = `Winner: ${board[1]}`
            winner = true;
        } else if (board[2] === board[5] && board[5] === board[8] && board[8] !== '') {
            gameStatus.innerHTML = `Winner: ${board[2]}`
            winner = true;
        } else if (board[2] === board[4] && board[4] === board[6] && board[6] !== '') {
            gameStatus.innerHTML = `Winner: ${board[2]}`
            winner = true;
        } else if (board[0] === board[4] && board[4] === board[8] && board[8] !== '') {
            gameStatus.innerHTML = `Winner: ${board[0]}`
            winner = true;
        }
        if (count === 9) {
            gameStatus.innerHTML = "Tie..."
            return;
        }
    }


});
