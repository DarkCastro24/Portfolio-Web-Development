let textElement = null;
let addBtn = null;
let removeBtn = null;

let counter = 0;

const bindElements = () => {
    textElement = document.querySelector("h1#text");
    addBtn = document.querySelector("#add-btn");
    removeBtn = document.querySelector("#remove-btn")
}

const bindListeners = () => {
    addBtn.addEventListener("click", (e) => {
        counter = counter + 1;
        textElement.textContent = counter;
    });

    removeBtn.addEventListener("click", (e) => {
        counter = counter - 1;
        textElement.textContent = counter;
    });
}

const main = () => {
    bindElements();
    bindListeners();

    textElement.textContent = counter;
}

window.onload = main;
