//se crea la función que se solicita, con sus respectivas variables de rgb y la fórmula
function rgb(){

    let red = Math.floor(Math.random()*(256 - 0)+0);

    let green = Math.floor(Math.random()*(256 - 0)+0);

    let blue = Math.floor(Math.random()*(256 - 0)+0);

    return `rgb(${red},${green},${blue})`;
    }

    //la función va a cambiar los colores de los parrafos que esten dentro de la clase 'contenido'
const element = document.querySelectorAll('.contenido p')

function changeColor (event){
    
}



for(let i = 0; i < element.length; i++){
    element[i].style.color = rgb();
}

console.log(rgb());