const INTERESSES =  document.querySelectorAll('.img-interesse');

for (let i = 0; i < INTERESSES.length; i++) {
    INTERESSES[i].onclick = (event) => {
        let idInteresse = INTERESSES[i].id 
        console.log(idInteresse);
        mostraTexto(idInteresse);
    }
}

const textoInteresses = {
    'r2d2': 'Estudos referentes à temática Tecnologia',
    'vader': 'Gosto de Star Wars, Série Vikings, Naruto e Dragon Ball Z',
    'stormtrooper': 'Curto jogos de RPG e MMORPG',
    'sabre': 'Gosto de viajar e conhecer novas culturas, e principalmente experimentar comidas regionais'
};

function mostraTexto(idInteresse) {
    let conteudoASerMostrado = document.querySelector('#texto-interesse');
    conteudoASerMostrado.classList.remove('container-interesse-oculto');
    conteudoASerMostrado.innerHTML = textoInteresses[idInteresse];
}

// const MENU_MOBILE = document.querySelector('#menu-hamburguer');
// const MENU_SAIR = document.querySelector('#menu-exit');
// const NAV_OCULTO = document.querySelector('.nav-itens-mobile');
// const CAIXA_MENU = document.querySelector('.menu-aberto');

// MENU_MOBILE.onclick = (event) => {
//     NAV_OCULTO.classList.remove('elemento-oculto');
//     MENU_MOBILE.classList.add('elemento-oculto');
//     CAIXA_MENU.classList.remove('elemento-oculto');
// }

// MENU_SAIR.onclick = (event) => {
//     NAV_OCULTO.classList.add('elemento-oculto');
//     MENU_MOBILE.classList.remove('elemento-oculto');
//     CAIXA_MENU.classList.add('elemento-oculto');
// }