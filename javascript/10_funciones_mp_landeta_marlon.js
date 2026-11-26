
console.log("Centro de Capacitación Online: funciones en javascript");

function  abrirportal() {
    console.log("Abriendo plataforma de capacitación...");
}
abrirportal();


function pilotonave(nombre) {
    console.log(nombre + " esta impartiendo una clase");
}
pilotonave("Instructor"); 


function recargarPistola(energia, recarga) {
   let energiatotal = energia + recarga;
   if (energiatotal > 100) {
       energiatotal = 100;
   }
   console.log("Progreso del curso actualizado a " + energiatotal + "% de avance");
   return energiatotal;
}
let energia = 50;
energia = recargarPistola(energia, 30);
energia = recargarPistola(energia, 40);


console.log("calcular descuentos en cursos online");
function calcularDescuento(precio, descuento) {
    let precioFinal = precio - (precio * descuento / 100);
    return precioFinal;
}
let precioOriginal = 100;
let porcentajeDescuento = 20;
let precioConDescuento = calcularDescuento(precioOriginal, porcentajeDescuento);
console.log("Precio Original: " + precioOriginal + "precio con descuento: " + precioConDescuento);


function evaluarcombustibleexamen(combustible,correctas,totalpreguntas) {
    let porcentajeCorretas = (correctas / totalpreguntas) * 100;
    if (combustible < 20) {
        console.log("ADVERTENCIA: Tiempo de capacitación bajo. Nivel actual: " + combustible + "% ");
    }
    if (porcentajeCorretas >= 70) {
        console.log("Examen aprobado con un porcentaje de respuestas correctas de: " + porcentajeCorretas + "%");
    } else {
        console.log("Lo siento, no aprobaste la evaluación. Porcentaje de respuestas correctas: " + porcentajeCorretas + "%");
    }

}


function misionExitosa (cristales) {
    let objetivo = 50;
    if (cristales >= objetivo) {
        console.log("Capacitación exitosa, actividades completadas: " + cristales);
    } else {
        console.log("Capacitación incompleta, actividades completadas: " + cristales);
    }
}
