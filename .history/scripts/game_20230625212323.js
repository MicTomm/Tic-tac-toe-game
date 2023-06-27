function startNewGame(){
    if (players[0].name === '' || players[1].name === '') {
        alert('Please, set a custom player name');
        return;
    }

    gameExecutionSection.style.display = 'block';
    gameBoard.style.display = 'grid';
    pTurn.style.display('block');
    
}

function fillingCell(event){
    event.target.classList.add('disabled');
    event.target.textContent = players[activePlayer].symbol;

    //stabilisco il turno del giocatore
    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
    spanPlayerTurn.textContent = players[activePlayer].name;
    
    event.target.removeEventListener('click', fillingCell);
    console.dir(event.target);
}