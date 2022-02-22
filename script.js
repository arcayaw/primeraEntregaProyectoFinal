/**

    TODO:
    - Saludar al cliente ✅
    - Indicar instrucciones. ✅
    - Mostrar  lista de opciones y operar segun lo elegido ✅
    - Informar los cambios realizados ✅
    - Ofrecer opciones nuevamente o salir.  ✅

 */

// Variables Globales

let id = 0;
let nombre = "";
let precio = 0;
let categoria = "";
let stock = 0;
let repetir = true;
let respuesta = 0;
let mostrarCajas = "";
let arrayCajas = [];

//saludo Al usuario.
alert(
  "Bienvenido al panel de Administración de NunchiBox.\n\nA continuación verá la lista de tareas del menu. Por favor seleccioné el número de la tarea a ejecutar."
);

let numero = prompt(
  "1- Ver inventario actual.\n2- Agregar Box.\n3- Eliminar Box.\n4- Ordenar por precio (menor a mayor).\n\n\nEscriba 'esc' para salir del menu."
);

//Declaro el constructor de cajas
class Box {
  constructor(id, nombre, precio, categoria, stock) {
    (this.id = id),
      (this.nombre = nombre),
      (this.precio = precio),
      (this.categoria = categoria),
      (this.stock = stock);
  }
}

//-----------FUNCIONES------------//

//funcion para recorrer el Array y mostrarlo en pantalla
function recorrerArray() {
  for (let objetoenArray of arrayCajas) {
    console.log(JSON.stringify(objetoenArray));
  }
  if (arrayCajas == "") {
    alert("aun no se han cargado productos");
  } else {
    alert("el resultado será mostrado por consola momentaneamente");
  }
  console.clear();
}

//funcion para ingresar una nueva caja
function ingresaCaja() {
  let nuevaCaja;
  id = ++id;
  nombre = prompt(`Ingrese el nombre de la caja ${id}.`);

  //valido precio
  do {
    precio = Number(prompt(`Ingrese el precio de la caja ${id}.`));
  } while (precio == null || precio == "" || isNaN(precio) || precio <= 0);

  categoria = prompt(
    `Cual es la categoria de la caja ${id}? Opciones posibles:\n\ncumpleaños\ncorporativa\nfiesta\nromantica\notra`
  );

  //valido stock
  do {
    stock = Number(prompt(`Ingrese el stock de la caja ${id}`));
  } while (stock == null || stock == "" || isNaN(stock) || stock <= 0);

  nuevaCaja = new Box(id, nombre, precio, categoria, stock);
  nuevaCaja.subtotalCajas;

  console.log(nuevaCaja);
  arrayCajas.push(nuevaCaja);
}

//funcion para eliminar una caja
function eliminarCaja() {
  let preguntar = true;
  let respuesta = "";
  let borrarCaja = "";
  let indiceBorrar = "";
  let cajaEncontrada = "";

  respuesta = parseInt(prompt("Desea eliminar una caja? \n\n1- Si \n2- No"));

  while (preguntar) {
    if (respuesta == 1) {
      borrarCaja = prompt("Ingrese el nombre de la caja a eliminar");
      cajaEncontrada = arrayCajas.find((caja) => caja.nombre === borrarCaja);
      //devuelve true si encuentra la caja o false caso contrario

      indiceBorrar = arrayCajas.indexOf(borrarCaja);

      if (cajaEncontrada) {
        //si encontro la caja la elimina
        alert("la caja que desea eliminar ha sido encontrada");
        arrayCajas.splice(indiceBorrar, 1);
        // console.log(arrayCajas); //luego sacar esto
        preguntar = false;
      } else {
        alert("No se encontró la caja que quieres eliminar");
        respuesta = parseInt(
          prompt("Desea eliminar una caja? \n\n1-Si \n2-No")
        );
      }
    } else if (respuesta == 2) {
      alert("Ha seleccionado no eliminar cajas");
      preguntar = false;
    } else {
      alert(
        "La opción selecionada no es valida. Ingrese 1 para eliminar una caja, o 2 para avanzar"
      );
      respuesta = parseInt(prompt("Desea eliminar una caja? \n\n1-Si \n2- No"));
    }
  }
}

//function para filtar por precio de menor a mayor.
function fitlrarPrecio() {
  arrayCajas.sort((caja1, caja2) => {
    if (caja1.precio < caja2.precio) {
      return -1;
    }
    if (caja1.precio < caja2.precio) {
      return 1;
    }
    return 0;
  });
  recorrerArray();
}

//defino mi while que dice mientras que numero NO SEA "esc"
while (numero != "esc") {
  //evaluo el numero en para cada uno de los casos, y si cae en algunas de las condiciones dadas, imprimo el valor.
  switch (numero) {
    case "1":
      recorrerArray();
      break;

    case "2":
      ingresaCaja();
      break;

    case "3":
      eliminarCaja();
      break;

    case "4":
      fitlrarPrecio();
      break;

      alert("Error");
      break;
  }
  numero = prompt(
    "Desea realizar una nueva tarea?\n\n1- Ver inventario actual.\n2- Agregar Box.\n3- Eliminar Box.\n4- Ordenar por precio  (menor a mayor).\n\nEscriba 'esc' para salir del menu."
  );
}
