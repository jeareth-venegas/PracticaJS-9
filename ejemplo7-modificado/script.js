//Ejemplo 7: Aplica el mismo handler a múltiples elementos.
// Event handler: Esta función se ejecuta cuando el evento se dispara.
// document.getElementByTagName(): Obtiene un array (HTMLCollection) con todos los elementos del tipo indicado.

function changeColor(event) {
  event.currentTarget.style.backgroundColor = 'red';
}


let elements = document.querySelectorAll('div');
// Asigna el event handler a cada elemento.
// Itera sobre los elementos usando for.
for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', changeColor);
}

