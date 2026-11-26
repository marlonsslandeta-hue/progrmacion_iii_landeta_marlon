
let personajes = ["Carlos", "María", "Andrés", "Lucía", "Alisson", "Ormaza"];
console.log ("Elemento 0:", personajes[0]);
console.log ("Elemento 2:", personajes[2]);
console.log ("Elemento 5:", personajes[5]);
console.log ("Elemento 4:", personajes[4]);
console.log ("Tamaño del arreglo:", personajes.length);


console.log("Estudiantes:",personajes);
console.log("INCLUIR ESTUDIANTES A UN ARREGLO CON PUSH");
personajes.push("Ormaza");
console.log("Estudiantes:",personajes);
personajes.push("Allisson");

console.log("Estudiantes:",personajes);
console.log("MODIFICAR ESTUDIANTES A UN ARREGLO CON PUSH");
personajes[7]="Alisson";

console.log("Estudiantes:",personajes);
console.log("PONER UN ESTUDIANTE AL INICIO DEL ARREGLO UNSHIFT");
personajes.unshift("Allisson");
personajes[0]="Alisson";

console.log("Estudiantes:",personajes);
console.log("ELIMINAR ESTUDIANTES DEL ARREGLO");
personajes.pop();
console.log("Estudiantes:",personajes);

personajes.pop(3);
console.log("Estudiantes:",personajes);

personajes.shift();
console.log("Estudiantes:",personajes);

personajes.splice(1,1);
console.log("Estudiantes:",personajes);
