let numeros = [41,56,21,36,5];

for(let m = 0 ; m<numeros.length; m++){
    for(let i=0 ; i<numeros.length -1; i++){

        if(numeros[i] > numeros[i+1]){
            let aux = numeros[i];
            numeros[i] = numeros[i+1];
            numeros[i+1] = aux;
        
        }
     }
}

console.log(numeros)