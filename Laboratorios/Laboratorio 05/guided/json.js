const jsonString = '{"name":"Sergio (Checo) Perez","age":33,"city":"Guadalajara","occupation":"Racing driver"}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject);

const personObject = {
    name: "Sergio (Checo) Perez",
    age: 33,
    city: "Guadalajara",
    occupation: "Racing driver"
  };
  
  const personString = JSON.stringify(personObject);
  console.log(personString);

  const taskString = '{"tasks":[{"id":1,"description":"Buy milk","completed":false},{"id":2,"description":"Exercise","completed":true},{"id":3,"description":"Send an email","completed":false}]}';
const tasksObject = JSON.parse(taskString);

console.log(tasksObject);