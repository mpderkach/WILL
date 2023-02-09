//5) Programa una función que invierta las palabras de una cadena de texto,
// pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
 
function cadenaAlReves (string){
    var cadenaAlReves = string.split("").map(function(elemento)){
        return elemento.split("").reverse().join("");
    }
    return cadenaAlReves.join("");   
 }
 cadenaAlReves("Hola Mundo");


// 6) Programa una función para contar el número de veces que se repite una 
// palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

function ContarCantidadRepeticiones (string, texto){
    var letras = 0;
    contador = 0;
while (letras !== -1){
    letras = string.indexOf(texto,letras);
    if (letras !== -1){
        letras ++;
        contador ++;
    }
}
    

return letras;
}
ContarCantidadRepeticiones();

// 7) Programa una función que valide si una palabra o frase dada, es un
//  palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
function asAmirror (frase){
    var invertida = frase.split("").reverse().join("");
    var fraseNormal = frase.toLowerCase();
    if (invertida === fraseNormal){
        return true;
    }else{
        return false;
    }
     
    }
    

// 8) Programa una función que elimine cierto patrón de caracteres de un 
// texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

 function EliminarPatron (texto,patron){
    texto.replace(new RegExp(patron, "ig"), "");
 }

 EliminarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");


//  9) Programa una función que obtenga un numero aleatorio
//   entre 501 y 600.
function NumeroAleatorio (){
    
    return Math.round((Math.random()*100)+500);

}

// 10) Programa una función que reciba un número y evalúe si es
//  capicúa o no (que se lee igual en un sentido que en otro), 
//  pe. miFuncion(2002) devolverá true.
function Capicua (num){
    var Numero = num.toString();
    var NumeroReves = num.split("").reverse().join("");

    if(Numero === NumeroReves){
        return true;
    }else{
        return false,
    }
}
console.log(Capicua (2002)); 

// 11) Programa una función que calcule el factorial de un número
//  (El factorial de un entero positivo n, se define como el producto
//  de todos los números enteros positivos desde 1 hasta n), pe. 
//  miFuncion(5) devolverá 120.
function CalculoFactorial(num){
    
    var factorial = 1;
    for(let i = num ; i>0 ; i--){
        factorial *= i;
    }
    return factorial
}

// 12) Programa una función que determine si un número es
// primo (aquel que solo es divisible por sí mismo y 1) o no,
// pe. miFuncion(7) devolverá true.
function EsPrimo (num){
       
    for (let i = 2; i < num; i ++){
        if(num % i === 0){ // significa q el numero se puede dividir x varios numeros
            return false;
        }else{
            return true;
        }
    }
    
}


// 13) Programa una función que determine si un número es par 
// o impar, pe. miFuncion(29) devolverá Impar.
function EsPar (num){
    if( num % 2 === 0){
        return "Es Par"
    } else {
        return "Es impar"
    }
}

// 14) Programa una función para convertir grados Celsius a Fahrenheit 
// y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

function convertirAFahrenheit (grados,unidad){
if(unidad === "C"){
    return ($(grados)°C = $(Math.round(grados*(9/5)+32)°F));
}else if(unidad === "F"){
    return ($(grados)°F = $(Math.round((grados -32) * (5/9))°C));
}
}

// 15) Programa una función para convertir números de base binaria 
// a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.


// 16) Programa una función que devuelva el monto final después de 
// aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20)
//  devolverá 800.
function aplicarDescuento (monto,descuento){
    return (${monto} - ${descuento}% = $${monto - ((monto*descuento)/100)})
}
aplicarDescuento();

// 17) Programa una función que dada una fecha válida determine 
// cuantos años han pasado hasta el día de
//  hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

function calcularAnios (fecha){
    var fechaHoy = new Date().getTime() //getTime imprime la fecha en milisegundos
    var hoyMenosFecha = fechaHoy - fecha.getTime(); //esta en milisegundos
    aniosEnMilisegundos = 1000*60*60*24*365
    aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMilisegundos);
}
// 18) Programa una función que dada una cadena de texto cuente
//  el número de vocales y consonantes, pe. miFuncion("Hola Mundo") 
//  devuelva Vocales: 4, Consonantes: 5.
function contarLetras(str){
    let vocales = 0;
    let consonantes = 0;

    for (let letra of str){
        if (/[aeiou]/.test(letra)){
            vocales ++;
        }

        if (/[bcdfghjklmnpqrstvwxyz]/.test(letra)){
            consonantes ++;
        }
                
    }
    return vocales;
    return consonantes; 
}




// 19) Programa una función que valide que un texto sea un nombre 
// válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

function ValidarNombre (nombre){
    let expReg = /^[A-Za-z]+$/g.test(nombre);
    return expReg
    if expReg ('"$(nombre)", es un nombre valido'){

    }else ('"$(nombre)",NO es un nombre valido')
}


// 21) Programa una función que dado un array numérico devuelve otro array 
// con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
function (numero){
    var elevadoAlCuadrado = [];
    for (var i = 0; i < numero.length; i++){
        elevadoAlCuadrado  = Math.pow(numero[i],2)
    }
    return elevadoAlCuadrado;
}

// 22) Programa una función que dado un array devuelva el número mas alto 
// y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
function minMax(arr){
    let max = arr[0];
    let min = arr[0];

    for(var i = 0; i < arr.length; i++){
        if( arr[i]< min){
            min = arr[i]
        }else (arr[i] > max){
            max = arr[i]
        }
    }
    return [max, min]
}
console.log(minMax([22,3,24,55]));

// otra opcion 

function minMax(arr){
    let max = Math.max(...arr);
    let min = Math.min(...arr);

    return [max, min]
}

console.log(minMax([22,3,24,55]));



// 23) Programa una función que dado un array de números devuelva un objeto con 2 
// arreglos en el primero almacena los números pares y en el segundo los impares, 
// pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

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









































































































































