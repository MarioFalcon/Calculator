const pantalla = document.querySelector(".pantalla"); // buscamos en html la pantalla con la clase y lo almacenamos
const botones = document.querySelectorAll(".btn"); //  traigo todos los elementos botones con array y lo almacenamos


botones.forEach(boton => {   // utilizo el metodo forEach para iterar sobre cada uno de los botones en el array
  boton.addEventListener("click", () => {  // con esta funcion al hacer click en un boton se ejecuta 
    const botonApretado = boton.textContent;  // almacenamos el texto del botón en la variable botonApretado

if (boton.id === "c") {    // con este (if) si pulsamos C mostramos en la pantalla 0, de este modo la reseteamos
  pantalla.textContent = "0";
  return;   // finaliza la ejecución de la función, quedando en 0 sin seguir el trayecto del codigo!!!
}

if (boton.id === "igual") {  // con este (if) si pulsamos ta tecla IGUAL 
  try {
    pantalla.textContent = eval(pantalla.textContent);  // con eval evaluamos las operaciones matematicas que esten en la pantalla (si es valido el codigo para evaluarla)
  } catch {   // si el codigo de la pantalla no se puede evaluar con eval mostramos error
    pantalla.textContent = "Error!";
  }
  return;  // finaliza la ejecución de la funcion
}

if (pantalla.textContent === "0") {      // con este (if) si la pantalla esta en 0 lo remplazamos al añadir otro numero
  pantalla.textContent = botonApretado;   // almacenamos el texto del botón en la variable botonApretado
} else {
  pantalla.textContent += botonApretado;   // si no esta en 0 el contenido del boton se agrega al final del numero de
}

})
})