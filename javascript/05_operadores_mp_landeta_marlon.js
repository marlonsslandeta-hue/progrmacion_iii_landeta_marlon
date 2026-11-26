
console.log("Operadores Aritmeticos");
let a=100;
let b=50;

console.log("Costo total de cursos:", a+b);
console.log("Descuento:", a-b);
console.log("Multiplicacion de cupos:", a*b);
console.log("Division de estudiantes:", a/b);
console.log("Cupos restantes:", a%b);

console.log("Operadores de Comparacion");
console.log("El costo del curso es igual al presupuesto?", a==b);
console.log("El costo del curso es diferente al presupuesto?", a!=b);
console.log("El costo del curso es mayor que el presupuesto?", a>b);
console.log("El costo del curso es menor que el presupuesto?", a<b);
console.log("El costo del curso es mayor o igual que el presupuesto?", a>=b);
console.log("El costo del curso es menor o igual que el presupuesto?", a<=b);

console.log("Operadores Logicos");
let x=true;
let y=false;

console.log("El estudiante esta inscrito AND tiene acceso:", x && y);
console.log("El estudiante esta inscrito OR tiene acceso:", x || y);
console.log("NOT estudiante inscrito:", !x);
console.log("NOT tiene acceso:", !y);  

console.log("Operadores de Asignacion");
let c=10;
console.log("Cantidad inicial de estudiantes:", c);
c+=5; // c = c + 5
console.log("Cantidad de estudiantes despues de agregar:", c);
c-=3; // c = c - 3
console.log("Cantidad de estudiantes despues de retirar:", c);
c*=2; // c = c * 2
console.log("Cantidad de estudiantes despues de duplicar:", c);
c/=4; // c = c / 4
console.log("Cantidad de estudiantes despues de dividir:", c);
c%=3; // c = c % 3  
console.log("Estudiantes restantes despues de c %=3:", c);
console.log("Operadores de Incremento y Decremento");
let d=10;
console.log("Cantidad inicial de cursos:", d);
d++; // d = d + 1
console.log("Cantidad de cursos despues del incremento:", d);
d--; // d = d - 1
console.log("Cantidad de cursos despues del decremento:", d);

console.log("Operadores de Comparacion estricta");
let e=100;
let f='100';
console.log("El costo es estrictamente igual al valor registrado?", e===f);
console.log("El costo es diferente al valor registrado?", e!=f);

console.log("Operadores Ternarios");
let edad=18;
let mensaje=edad>=18 ? "Puedes inscribirte en nuestros cursos" : "Necesitas ser mayor de edad para inscribirte";
console.log(mensaje);   

console.log("tabla de multiplicar del costo de un curso:");
console.log('50 x 1 =', 50*1);
console.log('50 x 2 =', 50*2);
console.log('50 x 3 =', 50*3);
console.log('50 x 4 =', 50*4);
console.log('50 x 5 =', 50*5);
console.log('50 x 6 =', 50*6);
console.log('50 x 7 =', 50*7);
console.log('50 x 8 =', 50*8);
console.log('50 x 9 =', 50*9);
console.log('50 x 10 =', 50*10);

/*console.log("tabla de dividir el costo del curso:");
for(let i=1; i<=10; i++){
    console.log("50 /", i, "=", 50/i);
}*/

console.log("tabla de dividir el costo del curso:");
console.log('50 / 1 =', 50/1);
console.log('50 / 2 =', 50/2);
console.log('50 / 3 =', 50/3);
console.log('50 / 4 =', 50/4);
console.log('50 / 5 =', 50/5);
console.log('50 / 6 =', 50/6);
console.log('50 / 7 =', 50/7);
console.log('50 / 8 =', 50/8);
console.log('50 / 9 =', 50/9);
console.log('50 / 10 =', 50/10);
