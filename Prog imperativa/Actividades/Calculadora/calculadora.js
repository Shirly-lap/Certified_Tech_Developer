const prompt = require("prompt-sync")({ sigint: true });

function sumar(num1,num2) {
    let resultado = num1 + num2;
    return resultado;
    
}

function restar(num1,num2) {
    let resultado = num1 - num2;
    return resultado;
    
}

function multiplicacion(num1,num2) {
    let resultado = num1 * num2;
    return resultado;
    
}

function division(num1,num2) {
    let resultado = num1 / num2;
    return resultado;
    
}

let numero1 = parseInt(prompt("Ingresa el primer valor "));
let numero2e  = parseInt(prompt("Ingresa el primer valor "));

