
console.log('Condicionales If');
console.log('Condicional simple If');
let energia=Number(prompt('Estudiante, ¿Cuántas horas de estudio tienes disponibles? '));
if(energia>0){
    console.log
        ('Tienes tiempo suficiente para continuar con tu capacitación');
}

console.log('Condicional If-Else Dos caminos');
let combustible=Number(prompt('Estudiante, ¿Cuántos cursos deseas realizar? '));
if(combustible>0){
    console.log('Tienes cursos seleccionados para continuar con tu inscripción');
}else{
    console.log('No has seleccionado ningún curso para inscribirte');
}

console.log('Condicional If-Else If-Else Múltiples caminos');
let dimension=prompt('Estudiante, ¿En qué área de capacitación deseas estudiar? ');
if(dimension==='programacion'){
    console.log('Seleccionaste el área de Programación');
}else if(dimension==='diseno'){
    console.log('Seleccionaste el área de Diseño');
}else if(dimension==='marketing'){
    console.log('Seleccionaste el área de Marketing');
}else{
    console.log('No tenemos registrada esa área de capacitación');
}   


console.log('Condicional If anidado');
let energia2= 50;
let conbustible2= 50;
if(energia2>0){
    if(conbustible2>0){
        console.log('Tienes tiempo y cursos disponibles para continuar con tu capacitación');
    }else{
        console.log('No tienes cursos disponibles para continuar con tu capacitación');
    }
}else{
    console.log('No tienes tiempo disponible para continuar con tu capacitación');
}       

console.log('Condicional If con operador lógico');
let energia3= 50;
let conbustible3= 50;
if(energia3>0 && conbustible3>0){
    console.log('Tienes tiempo y cursos disponibles para continuar con tu capacitación');
}else{
    console.log('No tienes tiempo o cursos disponibles para continuar con tu capacitación');
}   

console.log('Control de inscripciones a cursos');
let conbustible4= 400;
let energia4= 50;
let rick_disponible="si";
let summer_disponible="no";
let nave_averiada="no";

if(conbustible4<50 &&
    energia4<50 &&
    (rick_disponible==="si" ||
    summer_disponible==="si" &&
    nave_averiada==="si"))
    {
        console.log('Inscripción autorizada');
    } else{
        if(conbustible4<50){
            console.log('No puedes inscribirte, no hay suficientes cupos disponibles');
        }
        if(energia4<50){
            console.log('No puedes inscribirte, no tienes disponibilidad de tiempo');
        }
        if(rick_disponible==="no" ){
            console.log('No puedes inscribirte, el instructor no esta disponible');
        }
        if(summer_disponible==="no" ){
            console.log('No puedes inscribirte, el tutor no esta disponible');
        }
        if(nave_averiada==="si" ){
            console.log('No puedes inscribirte, la plataforma esta fuera de servicio');
        }
        if(rick_disponible==="no" && summer_disponible==="no"){
            console.log('No puedes inscribirte, el instructor y el tutor no estan disponibles');
        }
    }


console.log("Evaluación de capacitación");
let cristalesObjetivos = 200;
let cristalesRecolectados = 150;
let combustibleInicial = 1000;
let combustibleConsumido = 850;
let mortyHerido = "si";
let naveAveriada = "no";
let bonificacion = 0;
let porcentajeCumplimiento = (cristalesRecolectados / cristalesObjetivos) * 100;
let combustibleRestante = combustibleInicial - combustibleConsumido;

if (porcentajeCumplimiento >= 100 && combustibleRestante > 0 && mortyHerido === "no" && naveAveriada === "no") {
    console.log("Capacitación Completada con Éxito");
} else if (porcentajeCumplimiento >= 70 && porcentajeCumplimiento < 90) {
    console.log("Capacitación Completada Parcialmente");
} else if (porcentajeCumplimiento >= 50 && porcentajeCumplimiento < 70) {
    console.log("Rendimiento Regular, se requiere mejorar el desempeño");
} else {
    console.log("Capacitación No Aprobada, se requiere repetir el curso");
}

console.log("Evaluación de bonificación por desempeño");
if (porcentajeCumplimiento >= 90 && combustibleRestante >= 200) {
    bonificacion = 1000;
    console.log("Bonificación otorgada por desempeño excelente.");
} else {
    console.log("No se otorga bonificación por desempeño.");
}

console.log("Finalización segura del curso");
if (mortyHerido === "no" && naveAveriada === "no") {
    console.log("Curso finalizado correctamente.");
} else if (mortyHerido === "si" && naveAveriada === "no") {
    console.log("Curso finalizado con observaciones, el estudiante necesita reforzar sus conocimientos.");
} else if (mortyHerido === "no" && naveAveriada === "si") {
    console.log("Curso finalizado con observaciones, la plataforma presentó inconvenientes.");
} else {
    console.log("Curso finalizado con observaciones, el estudiante necesita reforzar sus conocimientos y la plataforma presentó inconvenientes.");
}

console.log("Resumen de la capacitación");
console.log("Objetivos del Curso:", cristalesObjetivos);
console.log("Objetivos Alcanzados:", cristalesRecolectados);
console.log("Porcentaje de Cumplimiento:", porcentajeCumplimiento.toFixed(2) + "%");
console.log("Horas de Estudio Iniciales:", combustibleInicial);
console.log("Horas de Estudio Consumidas:", combustibleConsumido);
console.log("Horas de Estudio Restantes:", combustibleRestante);
console.log("Estudiante Requiere Refuerzo:", mortyHerido);
console.log("Plataforma con Problemas:", naveAveriada);
console.log("Bonificación Otorgada:", bonificacion);
