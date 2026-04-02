'use strict';
// prima di tutto dichiariamo e assegnamo delle variabili con selezionati gli elementi che ci interessano
const containerImmagineLampadina = document.querySelector('#lampadinaContainer')
const bottoneInterattivo = document.querySelector('#interactiveButton')

// dobbiamo sostituire l'immagine nell'html della lampadina spenta
// con quella accesa con .innerHTML quando si clicca il bottone

function clickButtonToSwitchLampOnOff() {

}

// adesso il bottone deve avere un eventlistener
// per far si che quando lo si clicca ci sia un evento che scateni la funzione
bottoneInterattivo.addEventListener('click', clickButtonToSwitchLampOnOff);

// adesso facciamo dobbiamo far spegnere la lampadina e fare l'inverso di prima

