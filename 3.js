// Crea una variable A cuyo valor sea el número 9, después crea una variable B cuyo valor sea un string con el número 9, desarrolla la lógica para que cuando A == B muestre por consola “Son iguales”, ¿qué pasa si en vez de tener A == B, comprobamos que A === B?
const a = 9;
const b = "9";
if (a == b) {
    console.log("Son iguales");
} else {
    console.log("No son iguales");
}
//Lo que ocurriria si comprobasemos (a === b) nos devolveria false, ya que uno es un numero y el otro un string

// --------------------------------------------------

// Crea una variable mochila que sea un array de elementos, desarrolla la lógica para que sí mochila tiene más de 10 elementos muestre por consola el mensaje “No puedo cargar con tantas cosas”, sí mochila contiene entre 10 y 2 elementos se muestre por consola “Que bien voy con mi mochila” y si no muestre por consola “Creo q no necesito una mochila”
const mochila = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(mochila.length);
switch (true) {
    case (mochila.length > 10):
        console.log('No puedo cargar con tantas cosas');
        break;
    case ((mochila.length < 10) && (mochila.length > 2)):
        console.log('Que bien voy con mi mochila');
        break;
    default:
        console.log("Creo que no necesito una mochila");
};

// --------------------------------------------------

// Crear variable contarHasta10 con valor 0 e incrementar su valor con un bucle hasta que se verifique que contarHasta10 === 10
let contarHasta10 = 0;
console.log(`La cuenta empieza en ${contarHasta10}`)

for (let i = 0; contarHasta10 !== 10; i++) {
    contarHasta10++;
    console.log(`Sumamos 1 y la variable tiene ${contarHasta10}`);
}

// --------------------------------------------------

// Crea una variable diaFestivo que sea de tipo boolean. Crea un ternario que si diaFestivo es true devuelve un console.log de ‘Hoy no trabajo’ y  si es false ‘Hoy trabajo’
const diaFestivo = true;

const esFestivo = diaFestivo == true ? "Hoy no trabajo" : "Hoy trabajo";

console.log(esFestivo)

// --------------------------------------------------

// Crea una variable arrayBucle tipo array vacía, rellénala con números del 4 al 18 utilizando un bucle
const arrayBucle = [];
for (let i = 4; i != (18 + 1); i++) {
    arrayBucle.push(i)
}

console.log(arrayBucle)

// --------------------------------------------------

// Recorre la variable creada anteriormente arrayBucle ,suma todos sus elementos y guárdalos en una variable de nombre resultado
let resultado = 0;

for (let i of arrayBucle) {
    resultado += i
    console.log(resultado)
}

console.log(`La suma total es ${resultado}`)

// --------------------------------------------------

// Dado el siguiente array, [‘Con’, ‘Sofia’, ‘aprendiendo’, ‘bucles’], recorrelo utilizando el bucle “for of” y muestra por consola todos sus elementos, después recórrelo utilizando el bucle “for in” mostrando también por consola todos sus elementos
const arraySofi = ['Con', 'Sofia', 'aprendiendo', 'bucles'];
for (const i of arraySofi) {
    // Holi soy Ger :)
    console.log(i)
}

for (const i in arraySofi) {
    console.log(arraySofi[i]);
}

// --------------------------------------------------

// Crea un bucle utilizando “while” que itere 20 veces y muestre por consola “Patata” cada vez que el número de la iteración sea múltiplo de 3
let contadorPatatas = 0

while (contadorPatatas !== 20) {
    contadorPatatas++;
    if ((contadorPatatas % 3) === 0) {
        console.log("Patata")
    }
}

// --------------------------------------------------

// Crea un programa el cual te pregunte por una nota del 0 al 10 y dependiendo del número, te devuelva la siguiente clasificación.
// Nota: Debes de usar el Switch.
// 0 - 4: Insuficiente.
// 5 - 6: Suficiente.
// 7 - 8: Notable.
// 9 - 10: Sobresaliente.

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const queNota = () => {
    rl.question("¿Cual es tu nota? ", (nota) => {
        switch (nota) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
                console.log("Insuficiente");
                rl.close();
                break;
            case '5':
            case '6':
                console.log("suficiente");
                rl.close();
                break;
            case '7':
            case '8':
                console.log("Notable");
                rl.close();
                break;
            case '9':
            case '10':
                console.log("Sobresaliente");
                rl.close();
                break;
            default:
                console.log("El valor introducido no es correcto, por favor ingresa un valor util");
                rl.close();
                break;
        }
    })
}

//Esta funcion se ejecuta al final del script.

// --------------------------------------------------

// Crea una función resta que espere dos parámetros a y b y que devuelva la resta de los mismos.
const resta = (a, b) => {
    return a - b
}

console.log(resta(1, 5));

// --------------------------------------------------

// Crea la función duplicaNumero debe recibir un tipo number y devolver el doble del valor recibido. Si la función no recibe un dato tipo number debe devolver el string ‘Debo ser ejecutada con un número’
const duplicaNumero = (a) => {
    if (typeof(a) === 'number') {
        return a * 2;
    } else {
        return 'Debo ser ejecutada con un número'
    }
}

console.log(duplicaNumero(78));

// --------------------------------------------------

queNota();