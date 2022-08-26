/*Crear una función que convierta pulgadas en centímetros.
Recibe por parámetro pulgadas y retorna su equivalente en centímetros.*/

// funcion flecha
let pulgadas_flecha = (cm) => cm/2.54
console.log("funcion flecha pulgadas a cm ")
console.log( pulgadas_flecha (20))


/*2. Crear una función que recibe un string y lo convierte en una URL.
Ej: “pepito” es devuelto como “http://www.pepito.com”*/

function url (palabra){
    return "https://www."+palabra + ".com"
}

console.log(url("casas"));


//edad de los perros
function edadPerros (edadhumana){
    return edadhumana*7;
}
let edadhumanaFinal = edadPerros(10);

console.log(edadhumanaFinal);


//horas de trabajo
function horaDeTrabajo (SueldoMensual){
    return SueldoMensual/40;
}

let ValorHora= horaDeTrabajo(1000);
console.log(ValorHora);


function IMC (peso, altura){
    return (peso/(altura*altura));
}

let IMC_Final = IMC(80,1.8);
console.log (IMC_Final);

//convertir a mayusculas

function Mayusculas (PalabraX){
    return PalabraX.toUpperCase();

}
console.log(Mayusculas("asdasdasd"));

