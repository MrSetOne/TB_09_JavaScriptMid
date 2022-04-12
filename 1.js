// Dados 2 variables booleanas:
const booleano1 = true;
const booleano2 = false;

// Crear variable booleanoAnd cuyo valor sea la comparación booleana booleano1 and booleano2
const booleanoAnd = (booleano1 && booleano2)
console.log(booleanoAnd);

// Crear variable booleanoOr cuyo valor sea la comparación booleana booleano1 or booleano2
const booleanoOr = (booleano1 || booleano2)
console.log(booleanoOr)

// Crear variable booleanoNot cuyo valor sea la comparación booleana no booleano1
const booleanoNot = !booleano1;
console.log(booleanoNot)

// Crear variable booleanoMix0 cuyo valor sea la comparación booleana (booleano1 or booleano2) and (booleano1 or (not booleano1 and not booleano2)
const booleanoMix0 = ((booleano1 || booleano2) && (booleano1 || !booleano2));
console.log(booleanoMix0)