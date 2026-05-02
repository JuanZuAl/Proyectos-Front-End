
let botonCambiante = document.getElementById("myButton");
let spanColor = document.getElementById("color");
let caracteres = ["0123456789ABCDEF"]
botonCambiante.addEventListener("click", cambiarColor);

function cambiarColor() {
    let numeroRandom = "#";
    for (let i = 0; i < 6; i++) {
        numeroRandom += caracteres[0][Math.floor(Math.random() * 16)]; 
    }
    botonCambiante.style.backgroundColor = numeroRandom;
    botonCambiante.innerHTML = numeroRandom;
    document.getElementById("body").style.backgroundColor = numeroRandom;
    spanColor.textContent = numeroRandom;
}