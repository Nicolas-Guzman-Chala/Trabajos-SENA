let a = 0;
let b = 0;
let c = 0;

let num = parseInt(prompt("¿Qué quieres calcular? \n 1. Perímetro \n 2. Área"));

switch (num) {
  case 1: 
    let figuraP = parseInt(prompt("¿De qué figura quieres calcular el perímetro? \n 1. Triángulo \n 2. Rectángulo \n 3. Cuadrado \n 4. Círculo"));
    switch (figuraP) {
      case 1:
        let ladoAT = parseInt(prompt("¿Cuál es el lado A?"));
        let ladoBT = parseInt(prompt("¿Cuál es el lado B?"));
        let ladoCT = parseInt(prompt("¿Cuál es el lado C?"));
        alert("El perímetro del triángulo es: " + perimetroTriangulo(ladoAT, ladoBT, ladoCT));
        break;

      case 2: 
        let ladoAR = parseInt(prompt("¿Cuál es el lado A?"));
        let ladoBR = parseInt(prompt("¿Cuál es el lado B?"));
        alert("El perímetro del rectángulo es: " + perimetroRectangulo(ladoAR, ladoBR));
        break;

      case 3: 
        let ladoC = parseInt(prompt("¿Cuál es el lado del cuadrado?"));
        alert("El perímetro del cuadrado es: " + perimetroCuadrado(ladoC));
        break;

      case 4: 
        let radioC = parseInt(prompt("¿Cuál es el radio del círculo?"));
        alert("El perímetro (circunferencia) del círculo es: " + perimetroCirculo(radioC));
        break;

      default:
        alert("Opción no válida.");
        break;
    }
    break;

  case 2: 
    let figuraA = parseInt(prompt("¿De qué figura quieres calcular el área? \n 1. Triángulo \n 2. Rectángulo \n 3. Cuadrado \n 4. Círculo"));
    switch (figuraA) {
      case 1: 
        let baseT = parseInt(prompt("¿Cuál es la base del triángulo?"));
        let alturaT = parseInt(prompt("¿Cuál es la altura del triángulo?"));
        alert("El área del triángulo es: " + areaTriangulo(baseT, alturaT));
        break;

      case 2: 
        let baseR = parseInt(prompt("¿Cuál es la base del rectángulo?"));
        let alturaR = parseInt(prompt("¿Cuál es la altura del rectángulo?"));
        alert("El área del rectángulo es: " + areaRectangulo(baseR, alturaR));
        break;

      case 3: 
        let ladoAC = parseInt(prompt("¿Cuál es el lado del cuadrado?"));
        alert("El área del cuadrado es: " + areaCuadrado(ladoAC));
        break;

      case 4: 
        let radioA = parseInt(prompt("¿Cuál es el radio del círculo?"));
        alert("El área del círculo es: " + areaCirculo(radioA));
        break;

      default:
        alert("Opción no válida.");
        break;
    }
    break;

  default:
    alert("Opción no válida.");
    break;
}

function perimetroTriangulo(a, b, c) {
  return a + b + c;
}

function perimetroRectangulo(a, b) {
  return 2 * (a + b);
}

function perimetroCuadrado(lado) {
  return 4 * lado;
}

function perimetroCirculo(radio) {
  return 2 * Math.PI * radio;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

function areaRectangulo(base, altura) {
  return base * altura;
}

function areaCuadrado(lado) {
  return lado * lado;
}

function areaCirculo(radio) {
  return Math.PI * radio * radio;
}
