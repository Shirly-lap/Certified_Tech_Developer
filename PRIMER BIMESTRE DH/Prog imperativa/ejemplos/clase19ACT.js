function ascendente(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length -1; j++){
        if(array[j] > array[j +1]){
            let aux = array[j];
            array[j] = array[j+1];
            array[j+1] = aux;
        }
        }
    }
    return array;
}

    function ordenar(array) {
        
       let aux = ascendente(array)
       if (aux != array ) {
        return true;
       }
       else{
        return false;
       }
    }
//  console.log(ordenar([4,9,2,5,6,7,1,2]));

// 2. Desarrollar una función que genere una matriz, deberá recibir por parámetros la
// cantidad de filas y columnas y retornar con valores secuenciales numéricos.
    function matriz(fila,columna) {
        let num = 0;
        for (let i = 0; i < fila; i++) {

            for (let j = 0; j < columna; j++) {
                
                
            }
        }
        
    }


// 3. Dado él siguiente array de personas

