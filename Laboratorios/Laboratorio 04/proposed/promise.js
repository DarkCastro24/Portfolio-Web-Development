function getDataFromServer() {
    return new Promise((resolve, reject) => {
        // Simulate an asynchronous task (for example, an HTTP request)
        setTimeout(() => {
            const success = true; // Change to 'false' to simulate an error
            if (success) {
                resolve({
                    id: 1,
                    name: "Diego",
                    career: "Informatica",
                    age: 20
                });
            } else {
                reject('There was an error in the task.');
            }
        }, 2000); // Simulate 2 seconds delay
    });
}

console.log("Starting the asynchronous task...");

// Using async task promise
getDataFromServer()
    .then((result) => {
        console.log("Data successfully obtained:");
        console.log("Id: " + result.id);
        console.log("Name: " + result.name);
        console.log("Career: " + result.career);
        console.log("Age: " + result.age);
    })
    .catch((error) => {
        console.error(error); // Executed if the promise is rejected due to an error
    });