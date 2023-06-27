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

        settingScorePanel ();

        p1SelectedFieldSet.length = 0;
        p2SelectedFieldSet.length = 0;

        for (const cell of gameBoardCells) {
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

        if (playerTurnCounter >= 5) {

            executingTurns(p1SelectedFieldSet, 0);

        }
        activePlayer = 1;

    } else {
        p2SelectedFieldSet.push(event.target.value);

        if (playerTurnCounter >= 5) {

            executingTurns(p2SelectedFieldSet, 1);

        }

        activePlayer = 0;
    }

    //aggiorno il nome del player per il prossimo turno, e rendo la cella marcata non più cliccabile
    spanPlayerTurn.textContent = players[activePlayer].name;
    event.target.removeEventListener('click', fillingCell);

    console.log(p1SelectedFieldSet);
    console.log(p2SelectedFieldSet);

}

function executingTurns(array, playerIndex) {
    for (const solution in solutions) {
        console.log('solutions: ' + solution);
        matches = 0;
        for (const s of solutions[solution]) {
            console.log('SOLUZIONE: ' + s);
            for (const selectedField of array) {

                if (s == selectedField) {
                    matches++;
                    console.log('s: ' + s + ' == selectedField: ' + selectedField);
                    break;
                }

            }
        }
        if (matches == 3) {
            console.log('hai vinto');
            gameOver.style.display = 'block';
            pPlayerTurn.style.display = 'none';
            winnerPlayerName.textContent = players[playerIndex].name;
            players[playerIndex].score++ ;
            console.log('player score');
            console.log(players[playerIndex].score);

            

            for (const cell of gameBoardCells) {

                // for (const sol of solution) {
                //     if (cell.value == solution[sol]) {
                //         cell.style.backgroundColor = 'greenyellow';
                //     }
                // }

                cell.style.cursor = 'default';
                cell.removeEventListener('click', fillingCell);
            }
            isGameEnded = true;

            return;
        }
    }

}

function settingScorePanel () {
    p1NameScore.textContent = player1Name.textContent;
    p2NameScore.textContent = player2Name.textContent;
    // player1Score.textContent = players[0].score;
    // player2Score.textContent = players[1].score;
    player1Score.style.color = 'white';
    player1Score.textContent = players[0].score;
    console.log('p1-score: ' + player1Score.textContent);
    player2Score.style.color = 'white';
    player2Score.textContent = players[1].score;
    console.log('p2-score: ' + player2Score.textContent);
    scorePanel.style.display = 'block';
    if (players[0].score === players[1].score) {
        player1Score.style.color = 'rgb(27, 27, 27, 0.6)';
        player2Score.style.color = 'rgb(27, 27, 27, 0.6)';
        player1Score.style.backgroundColor = 'transparent';
        player2Score.style.backgroundColor = 'transparent';
    } else if (players[0].score > players[1].score){
        player1Score.style.backgroundColor = 'greenyellow';
        player2Score.style.backgroundColor = 'red';
    } else {
        player1Score.style.backgroundColor = 'red';
        player2Score.style.backgroundColor = 'greenyellow';
    }
}