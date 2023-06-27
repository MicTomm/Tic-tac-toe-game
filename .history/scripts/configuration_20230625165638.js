function editPlayerConfiguration(event) {
    /**
     * playerid è un attributo che realizzo nel file .html (data-playerid), per gli elementi edit-p1-btn 
     * e edit-p2-btn, al fine di tracciare quale dei due button-edit sto cliccando, ed utilizzarne 
     * l'identificativo estrapolato in js.
     * 
     * Si possono aggiungere più attributi(proprietà) allo stesso elemento.
     * 
     * l'attributo si realizza sempre facendo succedere una o più stringhe di testo alla stringa 'data-'.
     * Bisogna scrivere le stringhe tutto in minuscolo perché, se faccio console.dir(event), facendo
     * drilling fino alla voce target, posso constatare che, anche se scrivo in camelcase, l'attributo
     * viene registrato tutto in lowercase.
     * 
     * Se voglio scrivere invece che data-playerid, data-player-id, nel codice js devo poi estrapolarlo come:
     * event.target.dataset['player-id'] 
     */
    const playerIdSelected = event.target.dataset.playerid;
    playerId = playerIdSelected;

    console.log(players[playerId - 1].name);

    if (players[playerId - 1].name){
        inputValidationInput.value = players[playerId - 1].name;
    } else {
        inputValidationInput.value = '';
    }

    console.log(playerId);
    

    overlay.style.display = 'block';
    backdrop.style.display = 'block';

    
}

function cancelPlayerConfiguration() {
    overlay.style.display = 'none';
    backdrop.style.display = 'none';
    removeInputError();
    
    players[playerId - 1].name = '';

}

function savePlayerConfig(event) {
    /*
    preventDefault() evita che venga eseguito il comportamento di default quando viene inviato 
    il form.
    Tale comportamento consiste nell' inviare una richiesta GET al web server che la processerà,
    nel mio caso il server locale.
    */
    event.preventDefault();

    /*
    event è un oggetto js generato automaticamente dal browser al verificarsi di un evento, e che lo
    descrive.
    Con l'attributo target, si punta direttamente all'elemento HTML che ha generato l'evento.
    In questo caso il form, perché è stato il form ad essere inviato.
    
    new FormData è una built-in function che è resa disponibile direttamente nel browser in js.
    Con 'new', istanzio un oggetto di tipo FormData, e passandogli come parametro il pointer al form,
    posso estrapolare tutte le informazioni submitted che, in HTML presentano l'ttributo 'name' nel
    rispettivo input-element.
    */
    const formData = new FormData(event.target);
    playerName = formData.get('player-name').trim();
    console.log('Player name: ' + playerName);

    /*  Una stringa vuota è un falsy-value
    Una stringa che ha un valore è un truly-value
    Quindi, sto dicendo: se la stringa non è truly
    */
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
            player1Name.textContent = playerName;
        } else {
            player2Name.textContent = playerName;
        }

        cancelPlayerConfiguration();
    }

}

function removeInputError() {
    inputValidationErrorContainer.style.display = 'none';
    inputValidationInput.classList.remove('choosing-player-name-error');
    inputValidationLabel.classList.remove('choosing-player-name-label-error');
}