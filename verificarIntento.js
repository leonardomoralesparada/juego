function verificarIntento() {
  let numeroUsuario = (document.getElementById("valorUsuario").value);
  console.log(numeroSecreto);

  if (numeroUsuario === numeroSecreto) {
    asignarTextoElemento("p", "Acertaste el numero campeon");
  }
  return;
}
