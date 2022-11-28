// let matriz = [
//     [13,16,30,40] //filas
//     [10,20,82,40]
//     [11,26,87,48]
// ]

// //2. funcion que  suma todos los valoes  de la matriz que seaan pares

// function sumaPar(matrix) {
//     let suma = 0;

//     for (let m = 0; m <matrix.length; m++) {

//         for (let n = 0; n < matrix[m].length; n++) { //ojo condicion
//             if (matrix[n][m] %2 ==0){
//                 suma += matrix[m][n];
//             }
//         }
        
//     }
//     return suma;
    
// }


// console.log(sumaPar(matriz));

// 1. Desarrollar una función que reciba un array e indique si se encuentran ordenados de
// menor a mayor o no.

function ascendente(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length -1; i++){
        if(array[j]>array[i -1]){
            let aux = array[i];
            array[i] = array[i+1];
            array[i+1] = aux;
        }
        }
    }
    return array;
}

    function ordenar(array) {
       let aux = ascendente(array)
       if (aux === array ) {
        return true;
       }
       else{
        return false;
       }
    }
    console.log(ordenar([4,9,2,5,6,7,1,2]));

// a. si están ordenados retornar true
// b. caso contrario retorna false
// ejemplos de arrays
// [4,9,2,5,6,7,1,2] // false
// [1,2,3,4,5,6,7,8] // true
