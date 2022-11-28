const prompt = require("prompt-sync")({ sigint: true });
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


//DESAFIOS CONSIGNAS

function test1(x, y) {
    return y - x
    
}
//console.log(test1(10, 40));

function test2 (x, y){
    return x * 2
    console.log(x)
    return x / 2
}
//console.log(10)


//CONSIGNA CLASE 5S TRABAJANDO CON FUNCIONES

// 1. CONVERTIR PULGADAS A CENTIMETROS
function convertidor (num){
   return num * 2.54
}
//console.log("Las pulgadas ingresadas equivalen a: " + convertidor(7) + " Cm");

// 2. CONVERTIDOR DE URL
function ConvertidorUrl(strig){
    return  "http:/www." +strig +".com" 
}
//console.log(ConvertidorUrl("PaoLaMejor"));

// 3. STRING CON ADMIRACION
function frase (strig){
    return strig + "!"
}
//console.log(frase("Pao la mejor"));

// 4. EDAD DE LOS PERROS
function edadPerros (edadCanina){
    let convertidor = 7 * edadCanina;
    return convertidor;
}
//console.log(edadPerros(19));

// 5. VALOR HORA DE TRABAJO
function valorHoraTrabajo (sueldo){
    let valorHora = sueldo/40;
    return valorHora;
}
//console.log("Una hora de trabajo tiene el valor de: " + valorHoraTrabajo(900000));

// 6. CALCULADOR IMC    let altura = parseInt (prompt ("Cuanto mides en metros :"));  let peso = parseInt (prompt ("Cual es tu peso en kg :"));
   

  

    function calculadorIMC(peso, altura){
        let IMC = peso / (altura * altura) ;
    return IMC ;

}

//console.log(calculadorIMC(peso, altura)) ;
//console.log(calculadorIMC(60,170));

// EXTRAS

// 7. CONVERTIDOR DE MAYUSCULAS
function convertidorMayus(string) {
    let Mayus = string.toUpperCase();
    return Mayus;
}
//console.log(convertidorMayus("pao la mejor"));

// 8. TIPO DE DATO

function TipoDatos(data) {
    let dato = typeof(data);
    return dato;
}
//console.log(TipoDatos(false));

// 9. CIRCUNFERENCIAA
function circunferencia(num) {
    let radio = 2 * Math.PI * num;
    return radio;
}
//console.log(circunferencia(1));

