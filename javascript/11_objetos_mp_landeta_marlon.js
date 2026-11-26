
let nombre = "Carlos";
let edad = 22;
let planeta = "Ecuador";
let energia = 100;
let averiada = false;

let nave = {
    nombre: "Plataforma de Capacitación",
    edad:22,
    planeta: "Ecuador",
    energia: 100,
    averiada: false
}

console.log ("informacion de la plataforma de capacitacion:");
console.log("Nombre del estudiante " + nave.nombre);
console.log("Edad del estudiante: " + nave["edad"]);
console.log("Lugar de origen: " + nave["planeta"]);
console.log("Nivel de progreso: " + nave["energia"]);
console.log("Estado de la plataforma: " + nave["averiada"]);
console.log("plataforma de capacitacion", nave)

console.log("agregar una nueva propiedad a la plataforma de capacitacion");
nave.modelo = "Plataforma Online V1";
console.log = ("Modelo de la plataforma:" + nave.modelo);
nave["capacidadEstudiantes"] = 50;
console.log("capacidad de estudiantes:" + nave ["capacidadEstudiantes"]);
console.log("plataforma de capacitacion", nave)

console.log("Actualizar el nivel de progreso de la plataforma");
nave.energia =80;
console.log("nuevo nivel de progreso:" + nave.energia + "%");
nave["averiada"] = true;
console.log("nuevo estado de la plataforma:" + (nave.averiada ? "inactiva" : "operativa"));

console.log("plataforma de capacitacion", nave);
console.log("eliminar las propiedades de la plataforma");
delete nave.capacidadEstudiantes;
console.log("popiedad 'capacidadEstudiantes' eliminada");
console.log("plataforma de capacitacion", nave);

console.log("Recorrer las propiedades de la plataforma de capacitacion");
for (let propiedad in nave) {
    console.log(propiedad + ":" + nave[propiedad]);

}

console.log("plataforma de capacitacion", nave);



let laboratorio = {
    cursos: 3,
    instructores:4,
    estudiantes:87

}

console.log("calculo de unidades en el centro de capacitacion");

for(let totalunidades in laboratorio) {
    console.log(totalunidades + laboratorio[totalunidades]);
}
let total = laboratorio.cursos + laboratorio.instructores + laboratorio.estudiantes;
console.log ("total de unidades del centro de capacitacion:" +total);
