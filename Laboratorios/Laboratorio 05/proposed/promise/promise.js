/* 
Se deberá crear un programa que genere 4 promesas, dichas promesas se deberán almacenar en un arreglo para después ser llamadas utilizando el método Promise.allSettled()

- Cada estudiante debe **seleccionar una temática** para la creación del programa, por ejemplo: Obtener recursos de una fuente externa, Realizar operaciones complejas de cálculo, etc.
- La temática seleccionada, las respuestas y los errores deben ser **creativos**, no se aceptarán soluciones similares.
- El tiempo de retraso de las promesas debe variar entre 0 y 4 segundos.
- El resultado de la promesa debe ser seleccionado de manera **aleatoria**, es decir pueda ser que algunas de las promesas sean ejecutadas con éxito y otras devuelvan errores.
- Se debe imprimir en pantalla el detalle del estado de las promesas (*fulfilled* o *rejected*) y sus respectivos valores.

*/

// Simulated function to load data from an external source
function loadDataFromSource(source) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = `Data from ${source}`;
            if (Math.random() >= 0.5)
                resolve(data); // Resolve the promise with the data
            else
                reject(`Error loading data from ${source}`); // Reject the promise with an error message
        }, Math.random() * 4000); // Random delay between 0 and 4 seconds
    });
}

// Load data from multiple sources in parallel
const sources = ["Local Web Server", "DigitalOcean Server", "AWS Server","Google Cloud"];

const promises = sources.map(source => loadDataFromSource(source));

// Combine data when all promises are resolved
Promise.all(promises)
    .then(data => {
        console.log("Data loaded successfully from all sources:", data);
        // Here you can combine and process the data as needed
    })
    .catch(error => {
        console.error("Error loading data from at least one source:", error);
    });