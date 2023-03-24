/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
 var mayus = nombre[0].toUpperCase() + nombre.substring(1);
 return mayus
}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
    cb()


}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
   cb(num1,num2)
   return cb;
}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   totalArray= 0;

   for(var i =0; i <arrayOfNumbers.length; i++)
   totalArray= totalArray + arrayOfNumbers[i];

   cb(totalArray)
}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
// solucion 1:

// array.forEach(cb)

// solucion 2:
   for(var i = 0; i < array.length; i++){
      cb(array[i])
   }
   
}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
   nuevoArray=[];
   
   for(var i = 0; i < array.length; i++){
      cb(array[i])
      nuevoArray.push(cb(array[i])) 
   }
return nuevoArray;
}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
    
   var  inicioConA = arrayOfStrings.filter(i =>{
       return i[0]==="a";

   });
return inicioConA;

// nuevoArray=[];
// var inicioConA = arrayOfStrings.find(function(i){
//       return i[0] ==="a";
// });

//  nuevoArray.push(inicioConA);
//  return nuevoArray;



}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
