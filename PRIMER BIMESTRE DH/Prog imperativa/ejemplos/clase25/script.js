document.querySelector("h1").style.color = "blue";

let h2 = document.querySelector("h2");

h2.textContent = "Bienvenidos a nuestra pagina web";

let p = document.querySelector("p");

//p.textContent = "MODIFICADO CON TEXTCONTENT";

p.innerHTML = "<p>MODIFICADO CON INNER</p>"; 

let parrafo = document.querySelectorAll("p"); // todas las etiquetas
for (let i = 0; i < parrafo.length; i++) {
    parrafo[i].textContent = "TEXTO NUMERO: " + (i+1)
}