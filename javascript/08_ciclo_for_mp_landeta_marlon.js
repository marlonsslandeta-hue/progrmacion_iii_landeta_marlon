
console.log("ciclo for");
for (let i = 0; i < 5; i++) {
    console.log("Estudiante número:", i);
}

console.log("Cuenta Regresiva para iniciar una capacitación");
for(let i = 10; i >= 0; i--) {
    console.log("Faltan " + i + " segundos para iniciar el curso");
}
console.log("Cuenta regresiva para iniciar una capacitación con mensaje final");
for (let i = 10; i >= 0; i--) {
    console.log("Preparando inicio del curso!");
    if (i === 0) {
        console.log("¡La capacitación ha comenzado!");
    } else {
        console.log("Faltan " + i + " segundos para iniciar el curso");
    }
}

console.log("Nivel de progreso del estudiante");
let energia = 50;
for (let i = 0; i <= 100; i += 10) {
    if (energia >= i) {
        console.log("Nivel de progreso del estudiante: " + i + "%");
    }
}

const consumoPorViaje = 10;
let totalConsumido = 0;
for (let viaje = 1; viaje <= 5; viaje++) {
    totalConsumido += consumoPorViaje;
    console.log("Curso " + viaje);
    console.log("Total de horas de capacitación acumuladas hasta ahora:" + totalConsumido + " horas");
}
console.log("Total de horas de capacitación :" + totalConsumido + " horas");

console.log("Promedio de estudiantes inscritos");
let totalCristales = 0;
let dias = 7;
for (let dia = 1; dia <= dias; dia++) {
    let cristales = dia *5+5;
    totalCristales += cristales;
    console.log("Día " + dia + ": " + cristales + " estudiantes inscritos");
}
console.log("Total de estudiantes inscritos:" + totalCristales);   
console.log("Promedio de estudiantes inscritos por dia:"+(totalCristales/dias).toFixed(2));
