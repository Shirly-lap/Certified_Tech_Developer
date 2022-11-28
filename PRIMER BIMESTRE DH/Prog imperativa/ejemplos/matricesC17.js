/*let matrizDePrueba = [
    [1,2,9],
    [3,4,9],
    [5,9,5]
]*/

//delete matriz[2][1];  //BORRA EL VALOR DE ESA UBI
//console.table(matriz); //IMPRIME LA TABLA

//corchetes i filas cor d columnas
//console.log(matriz([2][1]));

//matriz[2][1]=16; //SE INGRESA VAL

/*
for (let fila = 0; fila < matriz.length; fila++) {  //filas

    for (let columna = 0; columna < matriz[fila].length; columna++) {
       console.log(matriz[fila][columna]);
        
    }
}

for (let j = 0; index < matriz.length; index++) {
    console.log(matriz[index][1]);   
}
*/
//mv entre filas matriz.length
//mv entre columnas matriz[i].length

/*
function mostrarPares(matriz) {
    for (let i = 0; i < matriz.length; i++) {
       for (let j = 0; j < array[i].length; j++) {
        
        
       }
        
    }
    
}
*/

//CONSIGNA

/**
 * Declara una variable que contenga una matriz
 * de 5x5 llena de puros numeros enteros y positivos
 */

/**
 * Luego, escribe un algoritmo para sumar todos
 * los numeros en la matriz.
 */

let matriz =[
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
    [16,17,18,19,20],
    [21,22,23,24,25]
]

let sum = 0;

function SumarTodos(matriz){
    let sumar=0 
    for(let i =0 ; i<matriz.length;i++){
        for(let j =0; j<matriz.length;j++){
         console.log(sumar+=matriz[i][j]  ) 
        }
    }
}
SumarTodos(matriz)

/*
let matriz [
    [1,2,3,4,5,6,7,8,9,10],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
]*/

function generarMatriz10x10(params) {
    let matrizARetornaar = [];
    for (let i = 0; i < 100; i+=10) {
        let fila = [];

        for (let j = 1; j <=10; j++) {
            fila.push(i+j);
        }
        
        matrizARetornaar.push(fila)
    }
    return matrizARetornaar
}

console.log

