const API = 'https://randomuser.me/api/';

function loadUser() {
    // Obtener datos de un usuario aleatorio
    fetch(API)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al obtener datos');
            }
            return response.json();
        })
        .then(data => {
            displayUser(data.results[0]);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function displayUser(user) {
    let data = `
        <h2>${user.name.first} ${user.name.last}</h2>
        <img src="${user.picture.large}" alt="${user.name.first}">
        <p>Email: ${user.email}</p>
        <p>Location: ${user.location.city}, ${user.location.country}</p>
    `;
    document.getElementById('user-info').innerHTML = data;
}

loadUser();