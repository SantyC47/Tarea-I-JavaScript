// Arrow function que no recibe parámetros
const sinParametros = () => {
  console.log("Esta función no recibe parámetros");
};

// Arrow function que recibe 1 parámetro
const unParametro = (parametro) => {
  console.log("El parámetro recibido es:", parametro);
};

// Arrow function que recibe más de 2 parámetros
const masDeDosParametros = (param1, param2, param3) => {
  console.log("Los parámetros recibidos son:", param1, param2, param3);
};

// Declaración de variables
const variableConst = 3;
let variableLet = 5;

// Realizar operaciones con las variables
variableLet += 2; // Sumar 2 a la variable variableLet

console.log("El valor de la variable constante es:", variableConst);
console.log("El valor de la variable let es:", variableLet);

// Ejecutar las arrow functions
sinParametros();
unParametro("Hola");
masDeDosParametros("JavaScript", "es", "genial");
