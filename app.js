let amigos = [];  // Array para almacenar nombres de amigos

// Asegurar que el script se ejecuta después de cargar la página
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".button-add").addEventListener("click", agregarAmigo);
    document.querySelector(".button-draw").addEventListener("click", sortearAmigo);
    const botonLimpiar = document.querySelector(".button-clear");
    if (botonLimpiar) {
        botonLimpiar.addEventListener("click", limpiarLista);
    }
});

function agregarAmigo() {
    let input = document.getElementById("amigo");

    if (!input) {  // Si el input no existe en el DOM
        console.error("El campo de entrada con id='amigo' no se encontró.");
        return;
    }

    let nombre = input.value.trim(); // Obtener el valor sin espacios en blanco

    if (nombre === "") {
        alert("Por favor, inserte un nombre."); // Si está vacío, mostrar alerta
        return;
    }

    amigos.push(nombre); // Agregar al array
    actualizarLista(); // Actualizar la interfaz
    input.value = ""; // Limpiar el campo de entrada
    console.log("Nombre agregado:", nombre); // Depuración en consola
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });

    console.log("Lista actualizada:", amigos); // Depuración en consola
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Debe agregar al menos un nombre antes de sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p> Amigo seleccionado: <strong>${amigoSorteado}</strong> </p>`;

    console.log("Sorteo realizado. Amigo seleccionado:", amigoSorteado);
}

function limpiarLista() {
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    console.log("Lista de amigos vaciada.");
}

