const user = {
    name: "Diego Castro",
    age: 20,
    country: "El Salvador"
}

const defaultSettings = {
    language: "es",
    notifications: true
}

const newObject = {
    ...user,
    ...defaultSettings
}

console.log(newObject);