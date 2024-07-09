const promiseFunc = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`---- No me mintieron ----`);
            resolve();
        }, 3000);
    });
}

console.log("---- Antes de la promesa ----");

promiseFunc()
    .then(() => {
        console.log("---- Despues de la promesa (100% real no feik) ----");
    });

console.log("---- Despues de la promesa ----");