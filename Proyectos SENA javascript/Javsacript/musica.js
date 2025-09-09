let personas = [];

function agregarPersona() {
  let persona = {};
  persona.nombre = prompt("Nombre:");
  persona.cedula = prompt("Cédula:");
  persona.fecha = prompt("Fecha de nacimiento (dd/mm/aaaa):");
  persona.correo = prompt("Correo:");
  persona.ciudadResidencia = prompt("Ciudad de residencia:");
  persona.ciudadOrigen = prompt("Ciudad de origen:");

  persona.canciones = [];
  for (let i = 0; i < 3; i++) {
    let artista = prompt("Artista favorito " + (i + 1) + ":");
    let titulo = prompt("Título de la canción " + (i + 1) + ":");
    persona.canciones.push({ artista, titulo });
  }

  personas.push(persona);
}

function mostrarPersona() {
  let pos = parseInt(prompt("Posición (0-" + (personas.length - 1) + "):"));
  if (pos >= 0 && pos < personas.length) {
    let p = personas[pos];
    let info =
      "Nombre: " +
      p.nombre +
      "\nCédula: " +
      p.cedula +
      "\nFecha nacimiento: " +
      p.fecha +
      "\nCorreo: " +
      p.correo +
      "\nCiudad residencia: " +
      p.ciudadResidencia +
      "\nCiudad origen: " +
      p.ciudadOrigen +
      "\nCanciones:";
    for (let c of p.canciones) {
      info += "\n- " + c.artista + " - " + c.titulo;
    }
    alert(info);
  } else {
    alert("Posición no válida");
  }
}

let opcion;
do {
  opcion = parseInt(prompt("1. Agregar persona\n2. Mostrar persona\n3. Salir"));
  switch (opcion) {
    case 1:
      if (personas.length < 6) agregarPersona();
      else alert("Ya hay 6 personas registradas");
      break;
    case 2:
      mostrarPersona();
      break;
  }
} while (opcion !== 3);
