// Tarea portafolio: En lugar de ocupar for ocupar un arreglo de promesas y ocupar la funcion map 

const divPromise = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (b == 0) {
                reject(new Error("Error: Div entre 0"));
            } else {
                resolve(a / b);
            }
        }, 3000);
    });
}

const divAsync = async (a,b) =>{
    if (b === 0) {
        //throw new Error("Error: Div entre 0");
    } else {
        return a/b;
    }
}

console.log("------ Antes de la promesa ------");

divAsync(2, 3)
    .then((result) => {
        return divAsync(result, 5);
    })
    .then(result => {
        return divAsync(result, 0);
    })
    .catch((error) => {
        console.error(error.message);
})


const main = async () => {
    try {
        const numbersArr = [1, 3, 5, 4, 8, 0];
        let acc = numbersArr[0];
        const promiseFns = numbersArr.slice(1).map(num => async () => {
            acc = await divPromise(acc, num);
            console.log(`El resultado es: ${acc}`);
            return acc;
        });
        await promiseFns.reduce((prevPromise, fn) => prevPromise.then(fn), Promise.resolve());
    } catch (error) {
        console.error(error.message);
    }
}; 

console.log("------ Despues de la promesa ------");

main();






