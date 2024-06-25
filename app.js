let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteado = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento,texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);

    console.log(numeroSecreto)

    if (numeroUsuario === numeroSecreto){
      asignarTextoElemento("p", `Acertaste el numero,  en ${intentos} ${(intentos ===1) ? "vez" : "veces"}`);
      document.getElementById("reiniciar").removeAttribute("disabled");
    } else if(numeroUsuario > numeroSecreto){
      asignarTextoElemento("p", "el numero es menor");
    }else{
      asignarTextoElemento("p", "el numero es mayor");
    }
    intentos++;
    limpiarCaja();
    return;
}

function limpiarCaja () {
  document.querySelector("#valorUsuario").value = "";
}

function condicionesIniciales () {
  asignarTextoElemento("h1", "Juego del Numero Secreto");
  asignarTextoElemento("p",`Indica un numero del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
  return; 
}

function reiniciarJuego () {
  //limpiar la caja
  limpiarCaja();
  //indicar mensaje de inicio
  //generar numero aleatorio
  //inicializar el numero de intentos
  condicionesIniciales();
  //deshabilitar el boton de nuevo juego
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
 
}


function generarNumeroSecreto(){
  let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
  console.log(numeroGenerado);
  console.log(listaNumeroSorteado);
  //si ya sorteamos todos los numeros
  if(listaNumeroSorteado.length == numeroMaximo){
    asignarTextoElemento("p", "ya se sortearon todos los numeros posibles");
  }else{
      // si el numero generado esta en la lista
      if (listaNumeroSorteado.includes(numeroGenerado)) {
        return generarNumeroSecreto();
        }else{
          listaNumeroSorteado.push(numeroGenerado)
          return numeroGenerado;
        }
      } 
   }
condicionesIniciales();
