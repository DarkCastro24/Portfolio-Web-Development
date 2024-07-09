// Ruta de la POKEAPI que retorna 20 pokemones
const pokeAPI = 'https://pokeapi.co/api/v2/pokemon?limit=20';

// Evento al cargar la pagina 
document.addEventListener('DOMContentLoaded', function () {
    readPokemons();
});

const readPokemons = () => {
    const container = document.querySelector('.container');
    fetch(pokeAPI)
        .then(response => response.json())
        .then(data => {
            const pokemonList = data.results;

            pokemonList.forEach(pokemon => {
                fetch(pokemon.url)
                    .then(response => response.json())
                    .then(pokeData => {
                        const card = document.createElement('div');
                        card.className = 'card';

                        let pokemonImage = pokeData.sprites.front_default;
                        let pokemonName = pokeData.name;
                        let pokemonType = pokeData.types[0].type.name;
                        let pokemonHeight = pokeData.height;
                        let pokemonWeight = pokeData.weight;

                        card.innerHTML = `
                            <img src="${pokemonImage}" alt="${pokemonName}">
                            <div id="data">
                                <h2>${pokemonName}</h2>
                                <p><b>Tipo:</b> ${pokemonType}</p>
                                <p><b>Altura:</b> ${pokemonHeight}</p>
                                <p><b>Peso:</b> ${pokemonWeight}</p>
                            </div>
                        `;
                        container.appendChild(card);
                    });
            });
        });
}