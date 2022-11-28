let tratoPersonalizado = confirm("¿Desea un trato personalizado?");
console.log(prompt("Por favor, introduzca su nombre"));
if (tratoPersonalizado) {
    

  alert(
    "Le damos la bienvenida a nuestro sitio " +
      nombre +
      ". ¡Muchas     gracias por visitarnos, estamos a su disposición! ?"
  );
} else {
  alert("Gracias por conectarse.");
}
