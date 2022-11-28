// el dom permite traabajar como u obj
document.querySelector("h1").style.color = "lime"; //PARA SELECCIONAR LA PRIMER ETIQUETA QUE ENCUNTRE

let h1 = document.querySelector("h1"); //manipular el contenido 

//h1.textContent = "PAO LA MEJOR!"; //CAMBIAR EL CONT DE ESA ETIQ

h1.innerHTML = "<p>PAO LA MEJOR CON P </p>"; //CAMBIAR EL CONT Y LA ETIQUETA POR DENTRO

let link = document.querySelectorAll("a"); // todas las etiquetas
for (let i = 0; i < link.length; i++) {
    link[i].textContent = "Soy el link " + (i+1)
}