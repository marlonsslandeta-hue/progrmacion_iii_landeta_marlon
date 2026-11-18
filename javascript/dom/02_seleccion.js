const energia = document.getElementById("energia");
const dimension = document.getElementById("dimension");
const portal = document.getElementById("portal");

energia.textContent = "Energía: 100%";
dimension.textContent = "Dimensión: C-137";
portal.textContent = "Portal: activado";

// SELECCION ATRAVES DEL NOMBRE DE LA CLASE//

const personajes = document.getElementsByClassName("personaje");
personajes.textContent = "Rick C-137";

const h2objeto = document.querySelector("h2");
h2objeto.textContent = "Preparando nave";

const universo = document.querySelector("#universo");
universo.textContent = "Preparando universo";

const estadomorty= document.querySelector("#morty .estado");
estadomorty.textContent = "preaparando para viajar";

const planetas = document.querySelectorAll(".planetas");
console.log(planetas)
console.log(planetas.length)

console.log(planetas[0].textContent);
console.log(planetas[1].textContent);
console.log(planetas[2].textContent);
console.log(planetas[3].textContent);

console.log("recorrer a traves de for");
for (let i = 0; i < planetas.length; i++) {
    console.log(planetas[i].textContent);
}

console.log("Con for of");
for (let planeta of planetas) {
    console.log(planeta.textContent);
}


