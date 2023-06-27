/*
    E' possibile puntare ad una function presente in una altro file .js
    Affinché ciò sia possibile, bisogna importare nel file .htm prima il file.js in cui è definita la
    function e successivamente il .js in cui la si utilizza.
*/

const editP1Btn = document.getElementById('edit-p1-btn');
const editP2Btn = document.getElementById('edit-p2-btn');

editP1Btn.addEventListener('click', editPlayer);
editP2Btn.addEventListener('click', editPlayer);