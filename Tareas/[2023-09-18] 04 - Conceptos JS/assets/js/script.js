const alumno = "Diego Castro";
const carnet = "00117322";
const carrera = "Ingenieria Informatica";

document.addEventListener("DOMContentLoaded", function () {
    datosEstudiante();
    imprimirNumeros();
    imprimirJSON();
});

function datosEstudiante() {
    let contenido;
    contenido = "<b>Datos impresos desde Javascript</b><br><br>" + "<b>Informacion del estudiante:</b> " + alumno + "<br><b>Carnet:</b> " + carnet + "<br><b>Carrera:</b> " + carrera;
    document.getElementById("contenido").innerHTML = contenido;
}

function imprimirNumeros() {
    let contenido = "<b>Imprimiendo numeros con un ciclo for</b> <br>";
    for (var i = 0; i < 10; i++) {
        contenido += i + 1 + " ";
    }
    document.getElementById("numeros").innerHTML = contenido;
}

function imprimirJSON() {
    const persona = {
        Nombre: "Diego",
        Apellido: "Castro",
        Edad: 20,
        Ciudad: "San Salvador"
    }; 
    // Convertir a JSON
    const datos = JSON.stringify(persona);
    // Imprimimos el JSON en consola 
    console.log(datos);
    alert("Revisar la consola ahi se encuentra el JSON impreso");
}

const operarNumeros = () => {
    let opcion = prompt("Ingrese la opcion \n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir", 1);
    var resultado;
    if (!isNaN(opcion)) {

        let num1 = parseInt(document.getElementById("num1").value);
        let num2 = parseInt(document.getElementById("num2").value);
        opcion = parseInt(opcion);

        switch (opcion) {
            case 1:
                var resultado = num1 + num2;
                break;
            case 2:
                var resultado = num1 - num2;
                break;
            case 3:
                var resultado = num1 * num2;
                break;
            case 4:
                var resultado = num1 / num2;
                break;
            default:
                var resultado = "Opcion no disponible";
                break;
        }
        alert("Resultado: " + resultado);
    }
    else {
        alert("La opcion ingresada debe ser un numero")
    }
};

