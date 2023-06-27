/*
    E' possibile puntare ad una function presente in una altro file .js
    Affinché ciò sia possibile, bisogna importare nel file .htm prima il file.js in cui è definita la
    function e successivamente il .js in cui la si utilizza.
*/
console.dir(document.body);
let playerId = 0;
let playerName;
let isNotToCancel = false;
let activePlayer = 0;

const players = [
    {
        name: '',
        id: 1,
        symbol: 'X'
    },
    {
        name: '',
        id: 2,
        symbol: 'O'
    }
]

const overlay = document.getElementById('aside-container');
const backdrop = document.getElementById('back-drop');

const editP1Btn = document.getElementById('edit-p1-btn');
const editP2Btn = document.getElementById('edit-p2-btn');
const cancelPConfigurationBtn = document.getElementById('cancel-btn');
const startGameBtn = document.getElementById('start-game-btn');

const form = document.querySelector('form');

const inputValidationErrorContainer = document.getElementById('input-validation-error-container');
const inputValidationLabel = document.getElementById('choosing-player-name-label');
const inputValidationInput = document.getElementById('choosing-player-name'); 
const inputValidationErrorParagraph = document.getElementById('input-validation-error');

const player1Name = document.getElementById('player1-name');
const player2Name = document.getElementById('player2-name');

const gameBoardCells = document.querySelectorAll('#game-board li');
const pTurn = document.getElementById('p-turn');

const gameExecutionSection = document.getElementById('game-execution');
const gameBoard = document.getElementById('game-board');

editP1Btn.addEventListener('click', editPlayerConfiguration);
editP2Btn.addEventListener('click', editPlayerConfiguration);
cancelPConfigurationBtn.addEventListener('click', cancelPlayerConfiguration);
form.addEventListener('submit', savePlayerConfig);
startGameBtn.addEventListener('click', startNewGame);

for (const cell of gameBoardCells){
    let i = 0;
    cell.addEventListener('click', fillingCell);
}