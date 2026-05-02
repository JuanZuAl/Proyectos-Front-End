let cuenta = 0


if (cuenta >= 15) {
    cuenta = document.getElementById('numero').style.color = "#d21212"
}
function aumentar() {
    cuenta++;
    document.getElementById("numero").innerHTML = cuenta
    if (cuenta >= 15) {
     document.getElementById('numero').style.color = "#d21212" 
    }else {
     document.getElementById('numero').style.color = "#000000" 
    }
}
    

function disminuir(){
    cuenta--
    document.getElementById('numero').innerHTML = cuenta
        if (cuenta <= 15) {
     document.getElementById('numero').style.color = "#000000" 
    }else {
     document.getElementById('numero').style.color = "#ff0000" 
    }
}


function restablecer (){
    cuenta = cuenta * 0
    document.getElementById('numero').innerHTML = cuenta
            if (cuenta >= 0 || cuenta <= 0) {
     document.getElementById('numero').style.color = "#000000" 
    }
}
