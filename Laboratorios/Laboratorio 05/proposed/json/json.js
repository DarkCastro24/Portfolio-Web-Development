const linusTorvaldString = '{"name":"Linus Benedict Torvalds","birthday":"28/12/1969","nationality":"Finnish","age":53,"creatorOf":[{"technology":"Linux Kernel","description":"Open-source Unix-like operating system core"},{"technology":"Git","description":"Distributed version control system"}],"occupation":"Software Engineer","educationLevel":"Master\'s degree in Computer Science","university":"University of Helsinki","hobbies":["Soccer","VideoGames","Guitar","Math"],"favoriteColor":"Blue","height":177}';

// 1. Convertir la cadena a un objeto de JavaScript llamado `linusTorvalds`
const linusTorvalds = JSON.parse(linusTorvaldString);
console.log(linusTorvalds);

/* 2. Se deberá imprimir en pantalla los siguientes elementos del objeto:
   1. Fecha de nacimiento
   2. Nacionalidad
   3. El nombre de la primera de las tecnologías en el arreglo de creaciones.
   4. La descripción de la segunda de las tecnologías en el arreglo de creaciones.
*/

console.log("\nFecha de nacimiento: ");
console.log(linusTorvalds.birthday ?? "Not found");
console.log("\nNacionalidad: ");
console.log(linusTorvalds.nationality ?? "Not found");
console.log("\nPrimera tecnologia: ");
console.log(linusTorvalds.creatorOf[0].technology ?? "Not found");
console.log("\nDescripcion:");
console.log(linusTorvalds.creatorOf[0].description ?? "Not found");

// 3. En una nueva variable `linusTorvaldsHobbies` deberá almacenar los elementos del objeto original (será un array). Sin embargo, se deben filtrar de manera que la variable `linusTorvaldsHobbies` contenga solo los hobbies cuyo nombre tiene más de 5 caracteres.
const linusTorvaldsHobbies = linusTorvalds.hobbies.filter(hobby => hobby.length > 5);

// 4. Imprimir en pantalla los elementos del array `linusTorvaldsHobbies`
console.log("Hobbies con más de 5 caracteres:", linusTorvaldsHobbies);


// 5. Explicar en un comentario multilínea por que el siguiente bloque de código da error, es decir no imprime el nombre de la tecnología y tampoco *Not found*:

//console.log(linusTorvalds.creatorOf[2].technology ?? "Not found");

/*
* Debido a que es una propiedad que no se encuentra definida "technology"
*/