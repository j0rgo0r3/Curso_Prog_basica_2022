const sectionReininiciar = document.getElementById("reiniciar")
const sectionSeleccionarAtaque = document.getElementById("Seleccionar-ataque");
const botonMascotaJugador = document.getElementById("boton-mascota")
const botonFuego = document.getElementById("boton-fuego")
const botonAgua = document.getElementById("boton-agua")
const botonTierra = document.getElementById("boton-tierra")
const botonReiniciar = document.getElementById("boton-reiniciar")

const sectionSeleccionarMascota = document.getElementById("Seleccionar-mascota");
const hipodoge_selected = document.getElementById("hipodoge")
const capipepo_selected = document.getElementById("capipepo")
const ratigueya_selected = document.getElementById("ratigueya")
const spanMascotaJugador = document.getElementById("mascota-jugador")

const spanMascotaEnemigo = document.getElementById("mascota-enemigo");

const spanVidasJugador = document.getElementById("vidas-jugador");
const spanVidasEnemigo = document.getElementById("vidas-enemigo");

const sectionNuevoMensajes = document.getElementById("resultado")
const AtaqueJugador = document.getElementById("ataques-del-jugador")
const AtaqueEnemigo = document.getElementById("ataques-del-enemigo")

const sectionMensajes = document.getElementById("resultado")

let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon{
    constructor(nombre, foto, vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
    }
}

let hipodoge = new Mokepon("Hipodoge",'assets/mokepons_mokepon_hipodoge_attack.png',5)
let capipepo = new Mokepon("Capipepo",'assets/mokepons_mokepon_capipepo_attack.png',5)
let ratigueya = new Mokepon('Ratigueya','assets/mokepons_mokepon_ratigueya_attack.png',5)

console.log(hipodoge)

function iniciarJuego() {

    sectionReininiciar.style.display = "none"
    sectionSeleccionarAtaque.style.display = "none"
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    botonFuego.addEventListener("click", ataqueFuego)
    botonAgua.addEventListener("click", ataqueAgua)
    botonTierra.addEventListener("click", ataqueTierra)
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function seleccionarMascotaJugador() {

    sectionSeleccionarMascota.style.display = "none"
    sectionSeleccionarAtaque.style.display = "flex"

    if (hipodoge_selected.checked) {
        spanMascotaJugador.innerHTML = "Hipodoge";
    }
    else if (capipepo_selected.checked) {
        spanMascotaJugador.innerHTML = "Capipepo";
    }
    else if (ratigueya_selected.checked) {
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


function seleccionarMascotaEnemigo() {
    let ataqueAleatoria = aleatorio(1, 3);

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
    if (ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE");
    } else if ((ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") || (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") || (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA")) {
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
    } else if (vidasJugador == 0) {
        crearMensajeFinal("Lo siento, perdiste el juego");
    }
}

function crearMensajeFinal(resultadoFinal) {
    sectionMensajes.innerHTML = resultadoFinal;
    botonFuego.disabled = true;
    botonAgua.disabled = true;
    botonTierra.disabled = true;
    sectionReininiciar.style.display = "block"

}

function reiniciarJuego() {
    location.reload();
}

function crearMensaje(mensaje) {

    let nuevoAtaqueJugador = document.createElement('p');
    let nuevoAtaqueEnemigo = document.createElement('p');

    sectionNuevoMensajes.innerHTML = mensaje
    nuevoAtaqueJugador.innerHTML = ataqueJugador
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo

    AtaqueJugador.appendChild(nuevoAtaqueJugador);
    AtaqueEnemigo.appendChild(nuevoAtaqueEnemigo);

    /*parrafo.innerHTML = `Tu mascota atacó con ${ataqueJugador}, la mascota de tu contrincante ataco con ${ataqueEnemigo} - ${mensaje}`;*/

    //sectionMensajes.appendChild(parrafo);
}

window.addEventListener("load", iniciarJuego)