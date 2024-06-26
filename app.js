// Constantes a tener en cuenta 

const palos = ['♠', '♥', '♣', '♦'];
const valores = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

// Funcion para generar la carta 

function generarCarta () {
    const palo = palos[Math.floor(Math.random() * palos.length)];
    const valor = valores[Math.floor(Math.random() * valores.length)];
    
    const head = document.querySelector('.card .head');
    const number = document.querySelector('.card .number');
    const foot = document.querySelector('.card .foot');
    
    head.innerText = palo;
    number.innerText = valor;
    foot.innerText = palo;
    
    if (palo === '♥' || palo === '♦') {
        head.style.color = 'red';
        number.style.color = 'black';
        foot.style.color = 'red';
    } else {
        head.style.color = 'black';
        number.style.color = 'black';
        foot.style.color = 'black';
    }
}

//Funcion para generar una nueva carta al cargar la pagina

window.onload = generarCarta;