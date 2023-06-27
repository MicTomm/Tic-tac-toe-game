function editPlayerConfiguration(){
    overlay.style.display = 'block';
    backdrop.style.display = 'block';
}

function cancelPlayerConfiguration(){
    overlay.style.display = 'none';
    backdrop.style.display = 'none';
}

function savePlayerConfig(event){
    /*
        preventEventDefault() evita che venga eseguito il comportamento di default quando viene inviato 
        il form.
        Tale comportamento consiste nell' inviare una richiesta GET al web server che la processerà,
        nel mio caso il server locale.
    */
    event.preventEventDefault();

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
    let playerName = formData.get('player-name');
    console.log(playerName);
}