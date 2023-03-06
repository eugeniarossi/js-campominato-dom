# Consegna

Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

*** 
1. Definisco una funzione che generi un array con 16 numeri random senza ripetersi:
    - creo array vuoto
    - con un ciclo while, che abbia come condizione la lunghezza dell'array minore di 16, genero i numeri random
    - aggiungo ogni numero random all'array se non è già incluso (definisco una funzione per controllare se sia già incluso)

2. Sottraggo al totale delle celle il numero di bombe, determinando il punteggio necessario per vincere. 
    
3. Definisco una funzione per il calcolo del punteggio:
        - definire un contatore che venga incrementato al click delle celle e rimuovere l'event listener dalla cella una volta cliccata
        OPPURE
        - creare un array in cui aggiungo le celle al click solo se non incluse già (riutilizzando la funzione precedente)

4. Definisco una funzione di game over:
    - Se viene cliccata una cella appartenente all'array delle bombe, viene aggiunta una classe per colorarla di rosso e richiamo la funzione termine partita.

5. Definisco una funzione per la vittoria: 
    Stabilisco delle condizioni: quando il contatore è pari al punteggio per vincere. Richiamo la funzione termine partita.

6. Definisco una funzione termine partita in cui stampo il punteggio in pagina.

7. Definisco una funzione di continua partita in cui definisco un ciclo while in cui la partita va avanti e il punteggio viene incrementato finchè non si realizzano le condizioni di game over o vittoria. 

***
***

## BONUS:
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

## Superbonus 1
Quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle.

## Superbonus 2
Quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste.

***
***
