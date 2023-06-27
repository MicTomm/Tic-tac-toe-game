function editPlayerConfiguration(){
    overlay.style.display = 'block';
    backdrop.style.display = 'block';
}

function cancelPlayerConfiguration(){
    overlay.style.display = 'none';
    backdrop.style.display = 'none';
}

function submitForm(event){
    event.preventEventDefault();
}