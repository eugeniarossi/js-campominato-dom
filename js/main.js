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

function startGame() {
    // Definisco una variabile per il numero di elementi
    let cellNumber = 0;
    // Svuoto la board
    board.innerHTML = '';
    // Leggo il valore dell'input select
    const level = selectInput.value;
    // Definisco una variabile livello per le classi css
    let levelClass;

    // Stabilisco delle condizioni
    if (level === 'hard') {
        cellNumber = 49;
        levelClass = 'hard';
    } else if (level === 'medium') {
        cellNumber = 81;
        levelClass = 'medium';
    } else {
        cellNumber = 100;
        levelClass = 'easy';
    }

    // Creo un document fragment
    let fragment = document.createDocumentFragment();
    // Creo gli elementi
    for (let i = 1; i <= cellNumber; i++) {
        const createdElement = myCreateElement('div', 'cell', i);
        // Assegno la classe livello
        myAddClass(createdElement, levelClass);
        createdElement.addEventListener('click', function () {
            // Definisco il comportamento dell' elemento al click
            myAddClass(createdElement, 'cell-onclick');
            console.log(createdElement.innerText);
        });
        // Aggiungo l'elemento al frammento
        myAppend(fragment, createdElement);
    }
    // Aggiungo il frammento alla board
    myAppend(board, fragment);
}

/***********
 * Main
 */

// Definisco delle variabili in cui salvo board, button, select
const board = document.querySelector('.board');
const playButton = document.querySelector('.play-button');
const selectInput = document.getElementById('level');

// Aggiungo un evento onclick al play button
playButton.addEventListener('click', startGame);