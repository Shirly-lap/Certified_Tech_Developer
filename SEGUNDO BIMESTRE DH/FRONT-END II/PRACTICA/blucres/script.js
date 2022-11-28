// FOR IN se usa con objetos

let personaje = {
    nombre: "Pao",
    apellido: "mejia",
    edad: 19
}

for(let caracteristicas in personaje ) {
    console.log(personaje[caracteristicas]);
}

//FOR Of se usa con array y string

let series=["pao la mejor 1", "pao la mejor 2", "pao la mejor 3"]

for(let unaSerie of series){ //i son las posisiones 
    console.log(unaSerie);
}