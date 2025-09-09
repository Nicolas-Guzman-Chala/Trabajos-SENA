function leerVector(n) {
  let vector = [];
  for (let i = 0; i < n; i++) {
    let num;
    do {
      num = parseInt(prompt("Número " + (i + 1) + " (ascendente):"));
    } while (isNaN(num) || (i > 0 && num < vector[i - 1]));
    vector.push(num);
  }
  return vector;
}

let v1 = leerVector(5);
let v2 = leerVector(5);

let mezcla = v1.concat(v2).sort((a, b) => a - b);

alert("Vector 1: " + v1.join(" ") +
  "\nVector 2: " + v2.join(" ") +
  "\nMezcla ordenada: " + mezcla.join(" "));
