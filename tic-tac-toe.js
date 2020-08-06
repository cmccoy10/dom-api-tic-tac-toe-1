window.addEventListener('DOMContentLoaded', event => {
    const currentPlayerSymbol = 'x'
    // Make a new array, squareValues, that has 9 spots, and fill those spots with ''
    const squareValues = Array(9).fill('');

    document.getElementById('tic-tac-toe-board').addEventListener('click', event => {
        console.log(event.target.id);
        if (event.target.id.includes('square')) {
            const index = event.target.id[event.target.id.length - 1];
            if (squareValues[index] === '') {
                console.log('success');
                squareValues[index] = 'x';
                event.target.innerHTML = '<img src="https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg">';
            }
        }



    });


});
