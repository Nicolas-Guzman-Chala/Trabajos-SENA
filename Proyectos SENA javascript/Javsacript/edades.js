let edades = [];
let menores = 0,
  mayores = 0,
  adultosMayores = 0;
let suma = 0;

for (let i = 0; i < 10; i++) {
  let edad;
  do {
    edad = parseInt(prompt("Edad (1-120):"));
  } while (isNaN(edad) || edad < 1 || edad > 120);

  edades.push(edad);
  suma += edad;

  if (edad < 18) menores++;
  else mayores++;

  if (edad >= 60) adultosMayores++;
}

let min = Math.min(...edades);
let max = Math.max(...edades);
let promedio = suma / edades.length;

alert(
  "Menores: " +
    menores +
    "\nMayores: " +
    mayores +
    "\nAdultos mayores: " +
    adultosMayores +
    "\nEdad mínima: " +
    min +
    "\nEdad máxima: " +
    max +
    "\nPromedio: " +
    promedio.toFixed(2)
);
