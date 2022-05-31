const INTERESSES =  document.querySelectorAll('.img-interesse');

for (let i = 0; i < INTERESSES.length; i++) {
    INTERESSES[i].onclick = (event) => {
        let idInteresse = INTERESSES[i].id 
        // console.log(idInteresse);
        mostraTexto(idInteresse);
    }
}

const textoInteresses = {
    'r2d2': 'texto r2d2',
    'vader': 'texto vader',
    'stormtrooper': 'texto stoormtrooper',
    'sabre': 'texto sabre'
};

function mostraTexto(idInteresse) {
    let textoASerMostrado = document.querySelector('#texto-interesse-apresentado');
    let divAparente = document.querySelector('#display-oculto-amostra');
    divAparente.classList.remove('display-texto-interesse')

    textoASerMostrado.innerHTML = textoInteresses[idInteresse];

}

const MENU_MOBILE = document.querySelector('#menu-hamburguer');
const MENU_SAIR = document.querySelector('#menu-exit');
const NAV_OCULTO = document.querySelector('.nav-itens-mobile');
const CAIXA_MENU = document.querySelector('.menu-aberto');

MENU_MOBILE.onclick = (event) => {
    NAV_OCULTO.classList.remove('elemento-oculto');
    MENU_MOBILE.classList.add('elemento-oculto');
    CAIXA_MENU.classList.remove('elemento-oculto');
}

MENU_SAIR.onclick = (event) => {
    NAV_OCULTO.classList.add('elemento-oculto');
    MENU_MOBILE.classList.remove('elemento-oculto');
    CAIXA_MENU.classList.add('elemento-oculto');
}