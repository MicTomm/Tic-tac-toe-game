function startNewGame() {
    if (players[0].name === '' || players[1].name === '') {
        alert('Please, set a custom player name');
        return;
    }

    gameExecutionSection.style.display = 'block';
    gameBoard.style.display = 'grid';
    pPlayerTurn.style.display = 'block';
    spanPlayerTurn.textContent = players[activePlayer].name;

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
            console.log('solutions: ' + solutions);
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
            }
        }

    }


    console.log('numero cella: ' + event.target.value);
    console.log(p1SelectedFieldSet);
    console.log(p2SelectedFieldSet);
    console.dir(event.target);
}

/**
 *  if (p1Matches == 3) {
                        gameOver.style.display = 'block';
                        pPlayerTurn.style.display = 'none';
                        winnerPlayerName.textContent = players[0].name;

                        //rimuovo i listener da ogni cella per non renderle più cliccabili ma consentire
                        //ai giocatori di guardare la soluzione
                        for (const cell of gameBoardCells){
                            cell.style.cursor = 'default';
                            cell.classList.remove('hover');
                            cell.removeEventListener('click', fillingCell);

                            
                        }
 */