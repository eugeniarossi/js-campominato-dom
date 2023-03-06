'use strict';

/***********
 * Functions
 */

// Definisco una funzione per generare un elemento, aggiungere classe e contenuto=value 
function myCreateElement(htmlElement, className, htmlValue) {
    const element = document.createElement(htmlElement);
    element.classList.add(className);
    element.innerText = htmlValue;
    return element;
}

// Definisco una funzione per aggiungere elemento html a container
function myAppend(containerElement, htmlElement) {
    containerElement.append(htmlElement);
}

// Definisco una funzione per aggiungere una classe a un elemento html
function myAddClass(htmlElement, className) {
    htmlElement.classList.add(className);
}

// Definisco una funzione per leggere il valore di un input
function inputValue(input) {
    const inputValue = input.value;
    return inputValue;
}

// Definisco una funzione per calcolare il numero di celle
function calcCellsNumber(level) {
    // Definisco una variabile per il numero di elementi
    let cellsNumber = 0;
    // Stabilisco delle condizioni
    if (level === 'hard') {
        cellsNumber = 49;
    } else if (level === 'medium') {
        cellsNumber = 81;
    } else {
        cellsNumber = 100;
    }
    return cellsNumber;
}

// Definisco una funzione per creare le celle
function createBoard(level, cellsNumber) {
    // Svuoto la board
    board.innerHTML = '';

    // Creo un document fragment
    let fragment = document.createDocumentFragment();
    // Creo gli elementi
    for (let i = 1; i <= cellsNumber; i++) {
        const createdElement = myCreateElement('div', 'cell', i);
        // Assegno la classe livello
        myAddClass(createdElement, level);
        createdElement.addEventListener('click', function() {
            // Definisco il comportamento dell' elemento al click
            myAddClass(createdElement, 'cell-onclick');
            pushNotIncluded(clickedCellsList, i);
            console.log({clickedCellsList});
            
            if (bombs.includes(i)) {
                createdElement.classList.add('game-over');
                alert('hai perso');
                endGame();
            }
        });
        // Aggiungo l'elemento al frammento
        myAppend(fragment, createdElement);
    }
    // Aggiungo il frammento alla board
    myAppend(board, fragment);
    return cellsNumber;
}

function pushNotIncluded(myArray, myNumber) {
    if (!myArray.includes(myNumber)) {
        myArray.push(myNumber);
    }
}

// Definisco una funzione che generi un array con numeri random senza ripetizioni
function generateRandomNums(randomNumsArray, arrayLength, maxNum) {
    randomNumsArray = [];
    while (randomNumsArray.length < arrayLength) {
        const generatedNumber = Math.floor(Math.random() * maxNum) + 1;
        pushNotIncluded(randomNumsArray, generatedNumber);
    }
    return randomNumsArray;
}

function endGame() {
    finalScore.innerText = `Il tuo punteggio: ${clickedCellsList.length - 1}`;
    /*
    const cells = document.querySelectorAll('.cell');
    for (let i = 1; i < cells.length; i++) {
        document.removeEventListener('click', 'cells[i]');
    }
    */
}

function victory(currentScore, victoryScore) {
    while (currentScore.length < victoryScore) {
        return false;
    }
    return true;
}

/***********
 * Main
 */

// START GAME

function startGame() {
    // Leggo il livello
    const level = inputValue(selectInput);
    // Calcolo il numero di celle
    let cellsNumber = calcCellsNumber(level);
    // Creo un array con le bombe
    bombs = generateRandomNums('bombs', bombsNumber, cellsNumber);
    console.log(bombs);
    // Creo la board
    createBoard(level, cellsNumber);
    
    //gameOver(bombs);
    // Calcolo il punteggio per la vittoria
    
}

// Definisco delle variabili in cui salvo board, button, select
const board = document.querySelector('.board');
const playButton = document.querySelector('.play-button');
const selectInput = document.getElementById('level');
const finalScore = document.getElementById('final-score');
const bombsNumber = 16;

let bombs;
let victoryScore = 0;
let clickedCellsList = [];

// Aggiungo un evento onclick al play button

playButton.addEventListener('click', function() {
    
    startGame();
    //victoryScore = cellsNumber - bombsNumber;
    /*
    victoryScore = 2;
    //victory(clickedCellsList.length, 2);
    
    if (victory(clickedCellsList.length, victoryScore) === true) {
        alert('hai vinto');
    }
    */
});

// GAME LOGIC

// Calcolo il punteggio necessario per vincere
/*


generateRandomNums('bombs', bombsNumber, cellsNumber);
*/