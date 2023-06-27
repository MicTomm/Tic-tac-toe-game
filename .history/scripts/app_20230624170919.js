/*
    E' possibile puntare ad una function presente in una altro file .js
    Affinché ciò sia possibile, bisogna importare nel file .htm prima il file.js in cui è definita la
    function e successivamente il .js in cui la si utilizza.
*/

const overlay = document.getElementById('aside-container');
const backdrop = document.getElementById('back-drop');

const editP1Btn = document.getElementById('edit-p1-btn');
const editP2Btn = document.getElementById('edit-p2-btn');
const cancelPConfigurationBtn = document.getElementById('cancel-btn');

const form = document.querySelector('form');

const inputValidationErrorContainer = document.getElementById('input-validation-error-container');
const inputValidationError = document.getElementById('input-validation-error');

editP1Btn.addEventListener('click', editPlayerConfiguration);
editP2Btn.addEventListener('click', editPlayerConfiguration);
cancelPConfigurationBtn.addEventListener('click', cancelPlayerConfiguration);
form.addEventListener('submit', savePlayerConfig);