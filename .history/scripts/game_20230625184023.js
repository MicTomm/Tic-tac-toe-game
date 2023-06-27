function startNewGame(){
    if (players[0].name === '' || players[1].name === '') {
        alert('Please, set a custom player name');
        return;
    }

    gameExecutionSection.style.display = 'block';
    gameBoard.style.display = 'grid';
}

function fillingCell(event){
    event.target.classList.add('.disabled');
    event.target.textContent = 'O';
}