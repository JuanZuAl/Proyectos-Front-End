const boton = document.querySelector("#eventButton");
boton.onclick = saludar;
/*

boton.addEventListener("mouseover", function() {
    botonCambiante.style.backgroundColor = "red";
});

boton.addEventListener("mouseout", function() {
    botonCambiante.style.backgroundColor = "";
}); 
boton.addEventListener("dblclick",saludar);
*/
function saludar() {
    console.log("Hola, has hecho click en el botón!")

}
