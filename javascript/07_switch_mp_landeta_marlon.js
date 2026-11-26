
let dimension = 4;
switch (dimension) {
    case 1:
        console.log('Estas en el curso de Programacion Web');
        break;
    case 2:
        console.log('Estas en el curso de Diseño Grafico');
        break;
    case 3:
        console.log('Estas en el curso de Marketing Digital');
        break;
    case 4:
        console.log('Estas en el curso de Excel Avanzado');
        break;
    default:
        console.log('Estas en un curso no registrado');
}

let personaje = 'Estudiante';
switch (personaje) {
    case 'Estudiante':
    case 'Instructor':
        console.log('Hola Estudiante o Instructor');
        break;
    case 'Administrador':
        console.log('Hola Administrador');
        break;
    default:
        console.log('Usuario no conocido');
}

let energia = 50;
switch (true) {
    case (energia > 0 && energia < 25):
        console.log('Tienes poco progreso en el curso, debes estudiar más para continuar');
        break;
    case (energia >= 25 && energia < 50):
        console.log('Tienes un progreso moderado, puedes continuar con tu capacitación');
        break;
    case (energia >= 50 && energia < 75):
        console.log('Tienes buen progreso, puedes continuar con tus estudios sin problemas');
        break;
    case (energia >= 75 && energia <= 100):
        console.log('Tienes un excelente progreso, estas cerca de completar el curso');
        break;
    default:
        console.log('Nivel de progreso desconocido');
}

console.log("calculadora de cursos");
let numero1= 10;
let numero2= 5;
let operacion = 'xyz';
let resultado;
switch (operacion) {
    case 'suma':
        resultado = numero1 + numero2;
        break;
    case 'resta':
        resultado = numero1 - numero2;
        break;
    case 'multiplicacion':
        resultado = numero1 * numero2;
        break;
    case 'division':
        if (numero2 !== 0) {
            resultado = numero1 / numero2;
            console.log("Resultado de la division:", resultado);
        } else {
            console.log("Error: Division por cero no permitida");
        }
        break;
    default:
        console.log("Operacion desconocida");
}

if (resultado !== undefined) {
    console.log("El resultado de la operacion es:",operacion,"=", resultado);
}
