const barra1 = document.getElementById('barra1');
const barra2 = document.getElementById('barra2');
const barra3 = document.getElementById('barra3');
const letras1 = document.getElementById('letras1');
const letras2 = document.getElementById('letras2');
const letras3 = document.getElementById('letras3');
const letraR = document.getElementById('letraR');
const letraG = document.getElementById('letraG');
const letraB = document.getElementById('letraB');
barra1.addEventListener('input', actualizarColor);
barra2.addEventListener('input', actualizarColor);
barra3.addEventListener('input', actualizarColor);

function actualizarColor() {
  const color1 = barra1.value;
  const color2 = barra2.value;
  const color3 = barra3.value; 

  document.body.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;

  letras1.textContent = `Rojo: ${color1}`;
  letras2.textContent = `Verde: ${color2}`;
  letras3.textContent = `Azul: ${color3}`;
  letraR.style.color = `rgb(${color1}, 0, 0)`;
  letraG.style.color = `rgb(0, ${color2}, 0)`;
  letraB.style.color = `rgb(0, 0, ${color3})`;

}

    