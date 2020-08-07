//se crea la función que se solicita, con sus respectivas variables de rgb y la fórmula
function rgb(){

    let red = Math.floor(Math.random()*(256 - 0)+0);

    let green = Math.floor(Math.random()*(256 - 0)+0);

    let blue = Math.floor(Math.random()*(256 - 0)+0);

    return `rgb(${red},${green},${blue})`;
    }

    //la función va a cambiar los colores de los parrafos que esten dentro de la clase 'contenido'
const p = document.querySelectorAll('p')
// se crea una funcion que cambie los colores de los parrafos
function changeColor (event){
    event.currentTarget.style.color = rgb();
}
//se crea una uncion que retorne el color negro de los parrafos
function returnColor(event){
    event.currentTarget.style.color = 'black';
}


for(let i = 0; i < p.length; i++){
    p[i].addEventListener('mouseenter', changeColor);
    p[i].addEventListener('mouseleave', returnColor);
}
