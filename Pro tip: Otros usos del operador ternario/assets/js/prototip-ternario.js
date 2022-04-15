/*
const elMayor = (a,b) => {  
    return (a >b) ? a : b;
}
*/

//cuando tiene un unico return se puede reducir a una sola linea de la siguiente manera
//se aconseja agregar los parentesis para una mejor lectura
const elMayor = (a,b) => (a > b) ? a : b;
console.log(elMayor(10,20));

//otro ejemplo de funciones usando const y funciones con arrow funtion 
const tieneMembresia = (miembro) => (miembro) ? '2 Dólares' : '10 Dólares'; 
console.log(tieneMembresia(false));

//arreglos 
const amigo = false;
const amigosArr = [
    'peter', 
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki'
];

console.log(amigosArr);

//Uso de mas de dos condiciones
const nota = 100;
const grado =  nota >= 95 ? 'A+' : 
               nota >= 90 ? 'A'  :
               nota >= 85 ? 'B+' :
               nota >= 80 ? 'B'  :
               nota >= 75 ? 'C+' :
               nota >= 70 ? 'C'  : 'f';

console.log({nota, grado});