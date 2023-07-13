function incrementarContador() {
    let contador = document.getElementById('contadoor');
    contador.innerHTML = parseInt(contador.innerHTML) + 1;
}

function disminuirContador() {
    let contador = document.getElementById('contadoor');
    let validar = parseInt(contador.innerHTML);
    if (validar > 0) {
       contador.innerHTML = validar-1; 
    }
    else{
        alert("Usted no ha comprado este producto")
    }
}