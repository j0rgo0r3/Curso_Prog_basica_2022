let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function seleccionarMascotaJugador() {
    //alert("Seleccionaste a tu Mokepon");
    let settionSeleccionarMascota = document.getElementById("Seleccionar-mascota");
    settionSeleccionarMascota.style.display = "none"
    
    let sectionSeleccionarAtaque = document.getElementById("Seleccionar-ataque");
    sectionSeleccionarAtaque.style.display = "flex"

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
    let sectionReininiciar = document.getElementById("reiniciar")
    sectionReininiciar.style.display = "none"
    
    let sectionSeleccionarAtaque = document.getElementById("Seleccionar-ataque");
    sectionSeleccionarAtaque.style.display = "none"

    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)

    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)

    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra) 

    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)
    
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

function ataqueFuego() {
    ataqueJugador = "FUEGO";
    ataqueAleatorioEnemigo();
}

function ataqueAgua() {
    ataqueJugador = "AGUA";
    ataqueAleatorioEnemigo();
}

function ataqueTierra() {
    ataqueJugador = "TIERRA";
    ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3);
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "FUEGO";
    }
    else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "AGUA";
    }
    else {
        ataqueEnemigo = "TIERRA";
    }

    combate()
}

function combate() {
    let spanVidasJugador = document.getElementById("vidas-jugador");
    let spanVidasEnemigo = document.getElementById("vidas-enemigo");
    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE");
    }else if ((ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") || (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") || (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA")) {
        crearMensaje("GANASTE");
        spanVidasEnemigo.innerHTML = parseInt(spanVidasEnemigo.innerHTML) - 1;
        vidasEnemigo--;
    } else {
        crearMensaje("PERDISTE");
        spanVidasJugador.innerHTML = parseInt(spanVidasJugador.innerHTML) - 1;
        vidasJugador--;
    }

    revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal("FELICIDADES! Ganaste el juego");
    }else if (vidasJugador == 0) {
        crearMensajeFinal("Lo siento, perdiste el juego");
    }
}

function crearMensajeFinal(resultado){
    let parrafo = document.createElement('p');
    let sectionMensajes = document.getElementById("mensajes");

    parrafo.innerHTML = resultado;
    
    sectionMensajes.appendChild(parrafo);

    let botonFuego = document.getElementById("boton-fuego")
    let botonAgua = document.getElementById("boton-agua")
    let botonTierra = document.getElementById("boton-tierra")
    botonFuego.disabled = true;
    botonAgua.disabled = true;
    botonTierra.disabled = true;

    let sectionReininiciar = document.getElementById("reiniciar")
    sectionReininiciar.style.display = "block"

}

function reiniciarJuego() {
    location.reload();
}

function crearMensaje(mensaje) {
    let parrafo = document.createElement('p');
    let sectionMensajes = document.getElementById("mensajes");

    parrafo.innerHTML = `Tu mascota atacó con ${ataqueJugador}, la mascota de tu contrincante ataco con ${ataqueEnemigo} - ${mensaje}`;
    
    sectionMensajes.appendChild(parrafo);
}

window.addEventListener("load", iniciarJuego)