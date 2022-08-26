//ACTIVIDAAD COTIDIANA : DESAYUNAR 

const prompt = require("prompt-sync")({ sigint: true });

let despierto = prompt("¿Te acabas de despertar? ");
let hambre = prompt("¿Tienes hambre? ");
let menu = "Estas son las opciones para desayunar";
let desayuno1 = "#Huevos revueltos";
let desayuno2 = "#Arepas";
let desayuno3 = "#Calentado";


//consola
console.log(despierto);
console.log(hambre);
console.log(menu);
console.log(desayuno1 + " " + desayuno2 + " " + desayuno3);


