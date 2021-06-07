/*
1-Crear una función que evalué si un usuario es mayor de edad, 
el resultado deberá mostrarse mediante una ventana (utilizar Alert)

2-Modificar el programa anterior para que evalué el ingreso de 3 usuarios
 e indique cuál de ellos es el mayor

*/

function mayorDeEdad(edad) {
    return edad >= 18 ? true : false;  // se puede simplificar a return edad >= 18;
}

function buscarIndiceMayor(edades){
    mayor = edades[0];
    indiceMayor = 0;
    console.log(edades);
    for (i = 1; i < edades.length ; i++){
            if (edades[i] > mayor) {
                mayor = edades[i];
                indiceMayor = i;
                console.log(i);
        }
    }

    return indiceMayor;
}

let elemento = document.getElementById("resultado");
let edad = prompt("Ingrese su edad: ");


if (mayorDeEdad(edad)) {
    elemento.textContent = "Usted es mayor de edad";
    alert("Usted es mayor de edad");
}
else {
    elemento.textContent = "Usted no es mayor de edad";
    alert("Usted no es mayor de edad");
}


document.write("<h3>Ejercicio 2</h3>");
let nombres = [];
let edades = [];

for (i=0 ; i < 3 ; i++){
    nombres[i] = prompt("Ingrese su nombre:");
    edades[i] = Number(prompt("Ingrese su edad:"));
}
console.log(edades);
console.log(edades.length);
mayor = buscarIndiceMayor(edades);

alert(`${nombres[mayor]} es el mayor con ${edades[mayor]} años.`);
document.write(`<p>${nombres[mayor]} es el mayor con ${edades[mayor]} años.</p>`)