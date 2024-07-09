const pokemon = [
    { name: 'Pikachu', type: 'Electric', level: 25 },
    { name: 'Bulbasaur', type: 'Grass', level: 20 },
    { name: 'Charizard', type: 'Fire', level: 36 },
    { name: 'Squirtle', type: 'Water', level: 18 },
    { name: 'Jigglypuff', type: 'Normal', level: 22 },
];

/*Utiliza un método de array para encontrar todos los Pokémon de tipo "Fuego" y guárdalos en un nuevo array. */
const fireType = pokemon.filter((item) => item.type == 'Fire');
console.log(fireType);

/*Utiliza otro método de array para encontrar todos los Pokémon que tienen un nivel superior a 30 y guárdalos en otro nuevo array. */
const lvl30 = pokemon.filter((item) => item.level >= 30);
console.log(lvl30);

/*Calcula la cantidad total de Pokémon que tienes en tu lista original. */
let contador = 0;
const numPokemons = pokemon.reduce(() => {
    contador++;
}, 0);

console.log("Numero de pokemons: " + contador);

