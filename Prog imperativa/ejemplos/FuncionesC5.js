//FUNCIONES

//ESTRUCTURA BÁSICA
/*function  sumar(a,b) {
    return a + b;
}*/

//FUNCIONES DECLARADAS
 function saludar(nombre) {
    return 'Hola' + nombre;
 }
/*console.log(saludar(" Pao la mejor"));*/
 

//FUNCIONES EXPRESADAS
function elDoble(unNumero) {
    return  unNumero * 2;  
}
/*console.log(elDoble(6));*/

let triplicar = function (numero) {
    return numero * 3;
}
//console.log(triplicar(2));

//VALORES POR DEFECTO 
function saludar(nombre = ' visitante' , apellido = ' anonimo') {
    return 'Hola ' + nombre + ' ' + apellido;
}
//saludar();

function hacerHelados(cantidad) {
    return '🍦'.repeat(cantidad);
}
let misHelados = hacerHelados(3);
//console.log(misHelados);

function ejemplo (funcion){
    return 'Hola soy una  ' + funcion;
}
//console.log(ejemplo('prueba'));

function anterior(num){
    return num - 1;
}

function triple(num){
    return num * 3;
}

function anteriorDelTriple(num){
    let solucion = triple(num);
    return anterior(solucion) ;
}
//console.log(anteriorDelTriple(2));

//ARROW FUNCTION

let sumar = (a, b) => a + b;
//console.log( sumar(2, 4) );

let laMitad = num => num / 2;
//console.log(laMitad(8) );

let dividir = (num1, num2) => num1 / num2;
//console.log( dividir(20, 4) );

//sin parametros
let saludo = () => "Hola mundo!";
//console.log(saludo);

//un solo parametro
let dobleDe = num => num * 2;
//console.log(dobleDe(2));

//dos parametros
let suma = (a, b) => a + b;
//console.log(suma(2,3));

//sin parametros pero con un return explicito
let horaActual = () =>{
    let fecha = new Date();
    return fecha.getHours() + ':' + fecha.getMinutes();
}
