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
//ContarCantidadRepeticiones();

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

