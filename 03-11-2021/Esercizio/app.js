const q = (selector) => document.querySelector(selector);
const pulsante = q('#pulsante')
const form = q('#form');

document.addEventListener('DOMContentLoaded', () => {
    render(form, data);
});

const render = (container, items) => {
    const elements = items.map((element) => {
        if (element.completed === true) {
            return `<li for="search"><input type="checkbox" checked>${element.title}</li>`
        } else {
            return `<li for="search"><input type="checkbox">${element.title}</li> `
        }
    })

    const content = elements.join('');
    container.innerHTML = content;


    pulsante.addEventListener("click", () => {
        elements.pop("")
        const remove = elements.join(" ");
        container.innerHTML = remove;
    })

    container.innerHTML = remove;
};