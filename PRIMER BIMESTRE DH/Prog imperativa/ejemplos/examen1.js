// Que reciba por parámetro un número entero y retorne su triple. 
let triple1 = num => num * 3;
//console.log(triple1(4));

//Que reciba por parámetro dos números enteros, verificar que sean distintos de 0 y retorne la división de ambos.
function distintos(num1, num2) {
    if (num1 && num2 !=0) {
        return num1 / num2
    }
}
//console.log(distintos(0,3))

//Que reciba por parámetro dos números enteros y si ambos son pares retorne la multiplicación de ambos, de lo contrario que retorne su suma.
function pares( num1, num2 ){
    if( num1 && num2 % 2 === 0){
        return num1  * num2
    }else{
        return num1 + num2
    }
}
//console.log(pares(7,5))

function viajar(edad){
    let pasaje = false;

    if (edad > 18 && pasaje === true) {
        return "Puede viajar"
    } 
    else if( edad > 18 && pasaje === false){
        return "Necesitas  comprar un pasaje"
    }else if(edad < 18 && pasaje === true){
        return "Puede viajar solo con permiso"
    }else{
        return "No puede viajar"
    }
}
//console.log(viajar(23))

let ciudades = [
    {
        nombre : "Mar del Plata",
        mesesDeTurismo : 4,
        cantDeTuristasPorMes : 10000
    },
    {
        nombre : "Medellin",
        mesesDeTurismo : 6,
        cantDeTuristasPorMes : 15000
    },
    {
        nombre : "Rio de Janeiro",
        mesesDeTurismo : 8,
        cantDeTuristasPorMes : 320000
    },
    {
        nombre : "Paris",
        mesesDeTurismo : 12,
        cantDeTuristasPorMes : 12000000
    }
]

function filtrar(ciudades) {
    let arreglo =[];
    for (let i = 0; i < ciudades.length; i++) {
        if (ciudades[i].cantDeTuristasPorMes > 90000) {
            arreglo.push(ciudades[i])
            return arreglo
        }
        
    } 
    
}
console.log(filtrar(ciudades))