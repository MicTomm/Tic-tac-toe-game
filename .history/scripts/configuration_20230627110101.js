function editPlayerConfiguration(event) {
    isNotToCancel = false;

    const playerIdSelected = event.target.dataset.playerid;
    playerId = playerIdSelected;

    if (players[playerId - 1].name) {
        inputValidationInput.value = players[playerId - 1].name;
    } else {
        inputValidationInput.value = '';
    }

    showingOrHidingPlayerConfigPanel('block', 'block');
}

function cancelPlayerConfiguration() {

    showingOrHidingPlayerConfigPanel('none', 'none');
    removeInputError();

    if (!isNotToCancel) {
        players[playerId - 1].name = '';
        console.log(players[playerId - 1].name);

        if (playerId == players[playerId - 1].id) {
            player1Name.textContent = 'Player Name';
        } else {
            player2Name.textContent = 'Player Name';
        }
    }
}

function savePlayerConfig(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    playerName = formData.get('player-name').trim();
    console.log('Player name: ' + playerName);

    if (!playerName) {

        inputValidationLabel.classList.add('choosing-player-name-label-error');
        inputValidationInput.classList.add('choosing-player-name-error');

        inputValidationErrorContainer.style.display = 'flex';
        inputValidationErrorContainer.style.flexFlow = 'row';
        inputValidationErrorContainer.style.justifyContent = 'center';
        inputValidationErrorContainer.style.alignItems = 'center';
        inputValidationErrorParagraph.textContent = 'Please, enter valid a name!';
        return;
    }
    else {
        removeInputError();

        players[playerId - 1].name = playerName;

        if (playerId == 1) {
            settingPNameForConfigPanelAndScorePanel(player1Name, p1NameScore, playerName);
        } else {
            settingPNameForConfigPanelAndScorePanel(player2Name, p2NameScore, playerName);
        }

        isNotToCancel = true;
        cancelPlayerConfiguration();
    }
}

function removeInputError() {
    inputValidationErrorContainer.style.display = 'none';
    inputValidationInput.classList.remove('choosing-player-name-error');
    inputValidationLabel.classList.remove('choosing-player-name-label-error');
}

function showingOrHidingPlayerConfigPanel(displayOverlay, displayBackdrop) {
    overlay.style.display = displayOverlay;
    backdrop.style.display = displayBackdrop;
}

function settingPNameForConfigPanelAndScorePanel(playerNameConfigParagraph, playerNameScoreParagraph, playerName) {
    playerNameConfigParagraph.textContent = playerName;
    playerNameScoreParagraph.textContent = playerName;
}