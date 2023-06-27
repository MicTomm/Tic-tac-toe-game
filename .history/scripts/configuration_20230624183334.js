function editPlayerConfiguration() {
    overlay.style.display = 'block';
    backdrop.style.display = 'block';
}

function cancelPlayerConfiguration() {
    overlay.style.display = 'none';
    backdrop.style.display = 'none';
    removeInputError();
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
    let playerName = formData.get('player-name').trim();
    console.log('Player name: ' + playerName);

    /*  Una stringa vuota è un falsy-value
    Una stringa che ha un valore è un truly-value
    Quindi, sto dicendo: se la stringa non è truly
    */
    if (!playerName) {

        inputValidationLabel.classList.add('choosing-player-name-label-error');
        inputValidationInput.classList.add('choosing-player-name-error');
        
        // player1Name.classList.add('player1-name-error');
        // player2Name.classList.add('player2-name-error');

        inputValidationErrorContainer.style.display = 'flex';
        inputValidationErrorContainer.style.flexFlow = 'row';
        inputValidationErrorContainer.style.justifyContent = 'center';
        inputValidationErrorContainer.style.alignItems = 'center';
        inputValidationErrorParagraph.textContent = 'Please, enter valid a name!';
        return;
    }
    else {
        removeInputError();
       

    }

}

function removeInputError() {
    inputValidationErrorContainer.style.display = 'none';
    inputValidationError.classList.remove('choosing-player-name-error');

    // player1Name.classList.delete('player1-name-error');
    // player2Name.classList.delete('player2-name-error');

}