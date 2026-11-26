
console.log("Sistema de consultas del Centro de Capacitacion Online");

let horas = [120, 200, 150, 90];

for (let i = 0; i < horas.length; i++) {
    console.log("Posicion:", i);
    console.log("Horas del curso:", horas[i]);
}

console.log("----------------------------------------");


let cursos = [120, 200, 150, 90];
let posicion = 2;
let nuevasHoras = 180;

for (let i = 0; i < cursos.length; i++) {
    console.log("Posicion:", i);
    console.log("Horas:", cursos[i]);

    if (posicion >= 0 && posicion < cursos.length) {
        cursos[posicion] = nuevasHoras;
    } else {
        console.log("Posicion no valida");
    }
}
console.log("Nuevas horas:", cursos);

console.log("----------------------------------------");


let estudiantes = [
    {id: 1, nombre: "Carlos", cursos: 3, edad: 25},
    {id: 2, nombre: "Maria", cursos: 2, edad: 30},
    {id: 3, nombre: "Alisson", cursos: 5, edad: 18},
];

for (let estudiante of estudiantes) {
    console.log("ID:", estudiante.id);
    console.log("Nombre:", estudiante.nombre);
    console.log("Cursos inscritos:", estudiante["cursos"]);
    console.log("Edad:", estudiante["edad"]);
}

console.log("----------------------------------------");


console.log("Registro de horas de capacitacion por estudiante");

let registros = [
    {
        estudiante: "Carlos",
        horas: [120, 200, 150]
    },
    {
        estudiante: "Maria",
        horas: [100, 180, 220]
    },
    {
        estudiante: "Alisson",
        horas: [90, 150, 130]
    }
];

for (let registro of registros) {
    let totalHoras = 0;

    console.log("Estudiante:", registro.estudiante);

    for (let hora of registro.horas) {
        console.log("Horas del curso:", hora);
        totalHoras += hora;
    }

    console.log("Total de horas registradas por", registro.estudiante, "son:", totalHoras);
}

console.log("----------------------------------------------------------------------------------");


let horasOriginales = [30, 50, 70, 40];

let horasDobles = horasOriginales.map(elemento => {
    return elemento * 2;
});

console.log("Horas duplicadas:", horasDobles);


let validos = horasOriginales.filter(hora => hora >= 50);
console.log("Horas filtradas:", validos);


let resultado = horasOriginales.reduce((acumulador, elemento) => {
    return acumulador + elemento;
});

console.log("Total de horas:", resultado);
