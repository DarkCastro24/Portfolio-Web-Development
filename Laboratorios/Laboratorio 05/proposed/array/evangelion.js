const yugiohCards = [
    "Dark Magician",
    "Blue-Eyes White Dragon",
    "Exodia the Forbidden One",
    "Cyber Dragon",
    "Elemental HERO Neos",
    "Chaos Dark Magician",
    "Dark Magician Girl",
    "Gravekeeper's Spy",
    "Blue-Eyes Alternative White Dragon",
    "Meteor Dragon",
    "Dragunity - Ascalon",
    "Harpie Lady",
    "Winged Kuriboh",
    "Gamma the Magnet Warrior",
    "Chaos MAX Dragon",
    "Elemental HERO Burstinatrix",
    "The Winged Dragon of Ra",
    "Spirit of Flames",
    "Black Luster Soldier - Envoy of the Beginning",
    "Celtic Guardian",
    "Chaos Sorcerer",
    "Apocalypse Rider - Lord of Despair",
    "Yubel - The Ultimate Nightmare",
    "Terror King Archfiend",
    "Wolf in Sheep's Clothing",
    "Darklord Morningstar",
    "Exiled Force",
    "Obelisk the Tormentor",
    "Red-Eyes Black Dragon",
    "Elemental HERO Neos",
    "Stardust Dragon"
  ];

// 1. Agrega la carta "Red-Eyes Black Dragon" al final del array `yugiohCards` utilizando el método de array adecuado.
yugiohCards.push("Red-Eyes Black Dragon");

// 2. Elimina la última carta del array `yugiohCards` utilizando el método de array adecuado.
yugiohCards.pop();

// 3. Agrega la carta "Black Luster Soldier - Envoy of the Beginning" al principio del array `yugiohCards` utilizando el método de array adecuado.
yugiohCards.unshift("Black Luster Soldier - Envoy of the Beginning");

// 4. Elimina la primera carta del array `yugiohCards` utilizando el método de array adecuado.
yugiohCards.shift();

// 5. Crea un nuevo array llamado `extraCards` que contenga las siguientes tres cartas: "Dark Magician Girl," "Elemental HERO Neos," y "Red Dragon Archfiend."
const extraCards = ["Dark Magician Girl", "Elemental HERO Neos", "Red Dragon Archfiend"];

// 6. Concatena (combina) el array `extraCards` con el array `yugiohCards`, creando un único array con todas las cartas.
const allCards = yugiohCards.concat(extraCards);

// 7. Elimina las últimas 5 cartas del array combinado utilizando el método de array adecuado.
const newAllCards = allCards.slice(0, -5);

// 8. Invierte el orden de las cartas restantes en el array combinado utilizando el método de array adecuado.
newAllCards.reverse();

// 9. Verifica si el array resultante contiene exactamente 25 cartas utilizando el método de array adecuado.
if (newAllCards.length === 25) {
    console.log("El array contiene exactamente 25 cartas.");
} else {
    console.log("El array no contiene exactamente 25 cartas, contiene " + newAllCards.length);
}
  
// 10. Convierte el array resultante en una única cadena de texto separada por comas con los nombres de las cartas utilizando el método de array adecuado.
const allCardsString = newAllCards.join(', ');
console.log(allCardsString);