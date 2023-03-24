/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:

   var nuevoArray=[];
   for(var key in objeto){
      var arreglo2 =[key,objeto[key]];
      nuevoArray.push(arreglo2);
   }
   return nuevoArray;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:

   var contador ={};

   for(var i of string){
   if(contador.hasOwnProperty(i))
      contador[i]+=1;
   else
   {
   contador[i]=1;
   }
   }
 return contador;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
var stringMayus=``;
var mayus=[];
var minus=[];
   for(var i=0; i < string.length; i++){
      if(string[i] === string[i].toUpperCase())
      {
        mayus.push(string[i])
      }
     
     else
     {
       (string[i] !== string[i].toUpperCase())
        minus.push(string[i])
      }
 stringMayus= mayus.join(``).toString()+ minus.join(``).toString();

   }
return stringMayus;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var contrario = frase.split(` `);

   var revesPala = contrario.map((lugar)=>{
   var resPos= ``;
   for (var i = lugar.length -1; i >=0;i--){
      resPos= resPos+lugar[i];
   }
   return resPos;
   });
return revesPala.join(` `)
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código: 
   var numero2 = numero.toString();
   var capicua ="";
   for (var i=numero2.length - 1;i >= 0;i--){
   capicua =  capicua + numero2[i];
   if (numero2 === capicua)
   return "Es capicua";
   }
 return "No es capicua"
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var newStr = ``;
   var strDel=`abc`;
   for(var i =0; i < string.length ; i++){
   if(!strDel.includes(string[i])){
    newStr = newStr +string[i];
  }
      
}
return newStr;
}


function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var orden=[];

for(var i =0; i < arrayOfStrings.length-1; i++){
for(var j =i; j < arrayOfStrings.length; j++){
  if(arrayOfStrings[i].length >arrayOfStrings[j].length ){
    orden=arrayOfStrings[i]
    arrayOfStrings[i]=arrayOfStrings[j]
    arrayOfStrings[j]=orden    
  }
}
}
return arrayOfStrings
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var array3=[];

for(var i = 0; i< array1.length;i++){
  var element1= array1[i]
for(var j = 0; j< array2.length;j++){
  var element2= array2[j]
  if( element1=== element2)
    array3.push(element1)
      
  
  }
}
return array3
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
