const mensaje = document.getElementById("mensaje");
const saludo = document.getElementById("saludo");

mensaje.textContent= "Mensaje de otro universo";
saludo.innerHTML = "<h1>Hello con innerHTML</h1>";

const ficha = document.getElementById("ficha");
ficha.innerHTML = `
    <h2>Rick sanchez</h2>
    <p>Dimension C-137</p>
    <p>Especie: Humano</p>
    <p>Estado: Vivo</p>
`;  

const nombre = document.getElementById("nombre");
const saludar = document.getElementById("saludar");
const registrar = document.getElementById("registrar");
  registrar.addEventListener("click", function() {
    console.log("Ejecutando click", nombre.value);
    saludar.textContent = "Hola, " + nombre.value + "!";
  });
