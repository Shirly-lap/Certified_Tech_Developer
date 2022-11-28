//ordenar nums ascendente
let numeros = [12,1,3,15,7]

let ordenar = array =>{

    // let aux = undefine
    // let aux =  0

    let aux

    for (let i = 0; i < array.length; i++) {
       
        for (let j = 0; j < array.length -1; j++) {
          if (array[j] > array[j+1]) { //comparación //desc camb <
            
            //intercambio 
            aux  = array[j] // captura el primer num en aux
            array[j] = array[j+1] // se mueve a la siguente pos
            array[j+1] = aux // se captura  el primer num  en la segun pos

          }

        }
        
    }
} 
//ordenar(numeros)
//console.log(numeros);


//ordenar arreglo

let mascotas = [
    {
        nombre : "jack",
        edad : 2
    },
    {
        nombre : "lola",
        edad : 1
    },
    {
        nombre : "firulais",
        edad : 4
    },
    {
        nombre : "mora",
        edad : 3
    },
]
 

let ordArreglo = array =>{

    let aux

    for (let i = 0; i < array.length; i++) {
       
        for (let j = 0; j < array.length -1; j++) {

          if (array[j].edad > array[j+1].edad) { //se cloca .prop a comparar
            
            //intercambio 
            aux  = array[j] 
            array[j] = array[j+1] 
            array[j+1] = aux 

          }

        }   
    }
} 
//ordArreglo(mascotas)
//console.log(mascotas);

// TODO : DADA LA SIGUIENTE MATRIZ REALIZAR LOS SIGUIENTES EJERCICIOS

let matrix = [
    [14, 12, 17, 41],
    [55, 16, 61, 23],
    [13, 22, 13, 32],
    [12, 61, 18, 23],
]

//TODO 1) CREAR UNA FUNCION QUE RECIBA POR PARAMETRO A LA MATRIZ Y
    //    ADEMAS LA POSICION DE UNA COLUMNA.
    //    NUESTRA FUNCION DEBE REMPLAZAR TOD0S LOS ELEMENTOS DE ESA COLUMNA
    //    POR UN STRING QUE DIGA "hello"

// UN SOLO CICLO FOR =>   for (let i  = 0; i <mat.length; i++{}
// UNA FILA => LE PIDO LA LONGITUD A ESA FIL
// UNA COLUMNA => LE PIDO LA LONGITUD A LA MATRIZ
// DIAGONAL PRINCIPAL => LE PIDO LA LONGITUD A LA MATRIZ
// DIAGONAL SECUNDARIA => LE PIDO LA LONGITUD A LA MATRIZ


// DOBLE FOR
// RECORRER MATRIZ COMPLETA

    function recorrerCol(mat,posicionCol) {
       
        for (let i  = 0; i <mat.length; i++ ){
          // mat[i][posicionCol] = "hello"; 
         //mat[i][posicionCol] =  mat[i][posicionCol] * (-1);
        }
    }
  //  recorrerCol(matrix, 2)
  //  console.table(matrix)

    function sumarCol(mat,posicionCol) {
        let acc = 0
        for (let i  = 0; i <mat.length; i++ ){
          //acc = acc + mat[i][posicionCol]
            acc += mat[i][posicionCol]
        }
        return acc
    }
   let resultado = sumarCol(matrix,2)
   // console.table(resultado)

   //TODO 2) CREAR UNA FUNCION QUE RECIBA POR PARAMETRO A LA MATRIZ Y
    //    ADEMAS LA POSICION DE UNA FILA.
    //    NUESTRA FUNCION DEBE RETORNAR EL RESULTADO DE MULTIPLICAR
    //    TOD0S LOS ELEMENTOS DE ESA FILA

//TODO 3) CREAR UNA FUNCION QUE RECIBA POR PARAMETRO A LA MATRIZ 
    //    Y RETORNE UN ARREGLO CON TOD0S LOS ELEMENTOS DE LA DIAGONAL SECUNDARIA
   

    let rcDiagonal = mat => {

        for (let i  =0; i > mat.length; i++){
            
            

        }
    }