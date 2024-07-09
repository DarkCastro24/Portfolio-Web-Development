// Create a function that returns a promise
function performAsynchronousTask() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous task (for example, an HTTP request)
    setTimeout(() => {
      const success = true; // Change to 'false' to simulate an error
      if (success) {
        resolve('The task was completed successfully.');
      } else {
        reject('There was an error in the task.');
      }
    }, 2000); // Simulate 2 seconds delay
  });
}

console.log("Starting the asynchronous task...");

// Using async task promise
performAsynchronousTask()
  .then((result) => {
    console.log(result); // Executed if the promise is successfully resolved
  })
  .catch((error) => {
    console.error(error); // Executed if the promise is rejected due to an error
  });

  console.log("Starting the asynchronous task...");
  const asynchronoustask = performAsynchronousTask();
  
  // Using async task promise
  asynchronoustask
    .then((result) => {
      console.log("Promise status (fulfilled):", asynchronoustask);
      console.log(result); // Executed if the promise is successfully resolved
    })
    .catch((error) => {
      console.log("Promise status (rejected):", asynchronoustask);
      console.log(error); // Executed if the promise is rejected due to an error
    })
    .finally(() => console.log("\nTask finished."));
  
  console.log("Promise status (pending):", asynchronoustask);
  console.log("Task in progress...");