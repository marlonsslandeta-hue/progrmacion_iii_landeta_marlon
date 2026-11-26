
console.log("Abriendo los módulos de la plataforma...");
let portal = 1;
while (portal <= 5) {
    console.log("Abriendo módulo " + portal + ".");
    portal++;
}
console.log("Todos los módulos han sido abiertos");

console.log("Cuenta regresiva para el inicio de la capacitación ");
let i = 10;
while (i >= 0) {
    console.log("Faltan " + i + " segundos para iniciar la capacitación");
    i--;
}

console.log("Recargar el contenido del curso");
let energia = 0;
let recarga = 10;
let totalRecargas = 0;
while (energia < 100) {
    energia += recarga;
    totalRecargas++;
    console.log("Cargando contenido... Nivel de progreso: " + energia + "%");
}
console.log("Contenido del curso totalmente cargado despues de " + totalRecargas + " recargas.");

console.log("Consumo de horas de capacitación del estudiante");
let combustible = 100;
let consumo= 15;
let viajes = 0;
while (combustible >= consumo) {
    combustible -= consumo;
    viajes++;
    console.log("Clase " + viajes + " realizada. Horas restantes: " + combustible + "%");
    if(combustible <50) {
        console.log("Advertencia: Quedan pocas horas de capacitación, nivel actual: " + combustible + "%");
    }
}
console.log("No hay suficientes horas para otra clase: " );
console.log("Total de clases realizadas: " + viajes);

console.log("Activar módulos de capacitación con DO...While");
let energiaPortal = 0;
do {
    console.log("Activando módulo... Nivel de progreso del módulo: " + energiaPortal + "%");
    energiaPortal -= 15;
} while (energiaPortal > 0);
console.log("No hay suficiente progreso para activar mas módulos");

console.log("Ahorrar para comprar un curso online");
let ahorros = 80;
let meta = 500;
let ahorroSemanal = 70;
let semanas = 0;
do {
    ahorros += ahorroSemanal;
    semanas++;
    console.log("Semana " + semanas + ": Ahorros actuales:" + ahorros+ " unidades");
} while (ahorros < meta);
console.log("Meta alcanzada en" + semanas + "semanas. Ahora el estudiante puede comprar el curso online.");
