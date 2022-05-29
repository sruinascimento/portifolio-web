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