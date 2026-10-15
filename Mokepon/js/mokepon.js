function seleccionarMascotaJugador() {
    //alert("Seleccionaste a tu Mokepon");
    let hipodoge_selected = document.getElementById("hipodoge").checked;
    let capipepo_selected = document.getElementById("capipepo").checked;
    let ratigueya_selected = document.getElementById("ratigueya").checked;
    let spanMascotaJugador = document.getElementById("mascota-jugador");
    
    if (hipodoge_selected ) {
        spanMascotaJugador.innerHTML = "Hipodoge";
    }
    else if (capipepo_selected) {
        spanMascotaJugador.innerHTML = "Capipepo";
    }
    else if (ratigueya_selected) {
        spanMascotaJugador.innerHTML = "Ratigueya";
    }
    else {
        alert("Selecciona una mascota");
    }

    seleccionarMascotaEnemigo();
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function iniciarJuego() {
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)

    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)

    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra) 
    
}

function seleccionarMascotaEnemigo() {
    let ataqueAleatoria = aleatorio(1, 3);
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo");
    if (ataqueAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = "Hipodoge";
    }
    else if (ataqueAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = "Capipepo";
    }
    else {
        spanMascotaEnemigo.innerHTML = "Ratigueya";
    }
}

function ataqueFuego() {}

function ataqueAgua() {}

function ataqueTierra() {}

window.addEventListener("load", iniciarJuego)


