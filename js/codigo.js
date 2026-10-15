function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function eleccion(jugada) {
    if (jugada == 1) {
        return "🪨"
    } else if (jugada == 2) {
        return "📄"
    } else if (jugada == 3) {
        return "✂️"
    } else {
        return "Sin elección correcta"
    }
}
let jugador = 0
let computadora = 0
let triunfos = 0
let perdidas = 0
let min = 1
let max = 3

while (triunfos < 3 && perdidas < 3) {
    jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera")
    computadora = aleatorio(min, max)
    //Seleccion de jugador
    alert("Elegiste " + eleccion(jugador))

    //Seleccion de computadora
    alert("La computadora eligió " + eleccion(computadora))
    //Combate
    if (jugador == computadora) {
        alert("Empate")
    } else if (jugador == 1 && computadora == 3) {
        alert("Ganaste, piedra gana a tijera")
        triunfos++
    } else if (jugador == 2 && computadora == 1) {
        alert("Ganaste, papel gana a piedra")
        triunfos++
    } else if (jugador == 3 && computadora == 2) {
        alert("Ganaste, tijera gana a papel")
        triunfos++
    } else {
        alert("Perdiste")
        perdidas++
    }
}
alert("Ganaste " + triunfos + " veces y perdiste " + perdidas + " veces")