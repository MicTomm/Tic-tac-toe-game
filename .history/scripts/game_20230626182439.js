function startNewGame() {
    if (players[0].name === '' || players[1].name === '') {
        alert('Please, set a custom player name');
        return;
    }

    gameExecutionSection.style.display = 'block';
    gameBoard.style.display = 'grid';
    gameOver.style.display = 'none';
    pPlayerTurn.style.display = 'block';
    spanPlayerTurn.textContent = players[activePlayer].name;

    if (isGameEnded) {
        gameOver.style.display = 'none';
        pPlayerTurn.style.display = 'block';


        p1SelectedFieldSet.length = 0;
        p2SelectedFieldSet.length = 0;
        for (const cell of gameBoardCells){
            cell.classList.remove('disabled');
            cell.textContent = '';
            cell.style.cursor = 'pointer';
            cell.addEventListener('click', fillingCell);
        }
    }

}

function fillingCell(event) {
    event.target.classList.add('disabled');
    event.target.textContent = players[activePlayer].symbol;
    playerTurnCounter++;

    //stabilisco il turno del giocatore
    if (activePlayer === 0) {
        p1SelectedFieldSet.push(event.target.value);
        activePlayer = 1;

    } else {
        p2SelectedFieldSet.push(event.target.value);
        activePlayer = 0;
    }

    spanPlayerTurn.textContent = players[activePlayer].name;
    event.target.removeEventListener('click', fillingCell);

    //fare i confronti tra arrays delle mosse selezionate dai due player e gli array delle soluzioni
    if (playerTurnCounter >= 5) {

        for (const solution in solutions) {
            console.log('solutions: ' + solution);
            p1Matches = 0;
            for (const s of solutions[solution]) {
                console.log('s: ' + s);
                for (const selectedField of p1SelectedFieldSet) {

                    if (s == selectedField) {
                        p1Matches++;
                        console.log('s: ' + s + ' == selectedField: ' + selectedField);
                        break;
                    }

                }
            }
            if (p1Matches == 3) {
                console.log('hai vinto');
                gameOver.style.display = 'block';
                pPlayerTurn.style.display = 'none';
                winnerPlayerName.textContent = players[0].name;

                for (const cell of gameBoardCells){
                    cell.style.cursor = 'default';
                    cell.removeEventListener('click', fillingCell);
                }
                isGameEnded = true;
                return;
            }
        }


        console.log('numero cella: ' + event.target.value);
        console.log(p1SelectedFieldSet);
        console.log(p2SelectedFieldSet);
        console.dir(event.target);
    }
}
