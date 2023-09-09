window.alert("Bienvenido a mis ejercicios JavaScript ");


var Vehiculos = {
    "marca" : [],
    "color" : [],
    "costo" : []
};

var marca = prompt("Digite la marca ");
var color = prompt("De que color quiere su vehiculo");
var costo = parseInt(prompt("Digite el costo"));


document.write(`El vehiculo con marca ${marca} de color ${color} tiene un costo de ${costo}`)