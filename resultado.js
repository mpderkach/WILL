// function elevarCuadrado (numero){
    // var elevadoAlCuadrado = [];
    // for (var i = 0; i < numero.length; i++){
        // elevadoAlCuadrado.push(Math.pow(numero[i],2)) 
        
    // }
    // return elevadoAlCuadrado;
// }
// console.log(elevarCuadrado[2,3,4]);

// function minMax (arr){
    // let min = arr[0];
    // let max = arr[0];
    // for (var i = 0; i < arr.length; i++){
        // if (min > arr[i]){
            // min = arr[i]
        // }
            // if (max < arr[i]){
            // max = arr[i]
        // }
    // }

    //  return [min , max]

// }

// console.log(minMax([3, 6, 5, 3, 44]));


function parEImpar (arr){
    let par = [];
    let impar = [];

    for(var i = 0 ; i < arr.length; i++){
        if( arr[i] % 2 === 0){
             par.push(arr[i])
        }else {
            impar.push(arr[i])
        }
    }
    return [par,impar];
}
console.log(parEImpar([1,22,3,4,5,6,7,48,9,0]))

















