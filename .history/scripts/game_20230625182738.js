function startNewGame(){
    if (players[0].name === '' || players[1].name === '') {
        alert('Please, set a custom player name');
    }

    gameExecutionSection.style.display = 'block';
    gameBoard.style.display = 'grid';
}