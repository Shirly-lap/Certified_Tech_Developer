/*
//CREAR O DEFINIR UNA FUNCIÓON

function saludar(nombrePersona) {
    console.log("Hola tanto tiempo " + nombrePersona);
}

//llamar o invocar

saludar("Mario");
saludar("Ana"); */


//FUNCIONES DECLARADAS
function sumar(num1, num2){
    let resultado = num1 + num2;
    return resultado;
}

let numeroIndicado = 14;

let rdoSuma = sumar(numeroIndicado,4);

console.log(rdoSuma);


//FUNCIONES EXPRESADAS
let sumar = function (num1, mun2) {
    return num1 + num2
}

//arrow funcioon
let sumaArrow = (num1,num2) => num1+num2;
let suma3 = sumaArrow