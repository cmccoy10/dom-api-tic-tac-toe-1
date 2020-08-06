window.addEventListener('DOMContentLoaded', event => {
    const currentPlayerSymbol = 'x'
    const squareValues = Array(9).fill('');

    document.getElementById('tic-tac-toe-board').addEventListener('click', event => {
        if (event.target.id.includes('square')) {
            console.log(event.target.id);
        }
        console.log('hi');


    });


});
