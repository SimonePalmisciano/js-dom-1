'use strict';

////////////////////
// VARIABILI GLOBALI
////////////////////
const containerImmagineLampadina = document.querySelector('#lampadinaContainer')
const bottoneInterattivo = document.querySelector('#interactiveButton')
const sfondoSpento = document.querySelector('.wrapper')


// funzione che al click del bottone cambia immagine, testo del bottone e sfondo del container
function clickButtonToSwitchLampOnOff() {

    // VARIABILI NELLO SCOPE DELLA FUNZIONE
    const bottoneSpento = 'Spegni Lampadina'; // dichiarata variabile e assegnata con testo per il bottone
    const bottoneAcceso = 'Accendi Lampadina';
    const imgLampadaAccesa = `
    <img src="./img/yellow_lamp.png" alt="lampadina accesa"></img>
    `;
    const imgLampadinaSpenta = `
    <img src="./img/white_lamp.png" alt="lampadina spenta"></img>
    `;

    // questo if fa un controllo nel testo all'interno del pulsante nell'HTML 
    // quindi se è presento quel testo farà le sue azioni

    if (bottoneInterattivo.innerHTML.includes('Accendi')) {

        bottoneInterattivo.innerHTML = bottoneSpento; // sostituirà il testo all'interno del bottono
        containerImmagineLampadina.innerHTML = imgLampadaAccesa; // sostituirà l'immagine

        sfondoSpento.style.backgroundColor = 'white'; // cambierà lo sfondo nell'HTML 
        sfondoSpento.style.color = 'black';

    } else if (bottoneInterattivo.innerHTML.includes('Spegni')) {
        bottoneInterattivo.innerHTML = bottoneAcceso;

        containerImmagineLampadina.innerHTML = imgLampadinaSpenta;
        sfondoSpento.style.backgroundColor = 'black';
        sfondoSpento.style.color = 'white';
    }
}

// adesso il bottone deve avere un eventlistener
// per far si che quando lo si clicca ci sia un evento che scateni la funzione
bottoneInterattivo.addEventListener('click', clickButtonToSwitchLampOnOff);