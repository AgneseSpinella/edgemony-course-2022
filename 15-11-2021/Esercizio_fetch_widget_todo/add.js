import { render, API } from './utils.js';

const add = () =>
{
    const container = document.querySelector('#container');

    render(container, `
        <div>
            <h3>Aggiungi una nuova scheda</h3>
            <form id="create">
                <div class="row">
                    <label for="completed">Completato:</label>
                    <input id="completed" type="checkbox" name="completed">
                </div>
                <div class="row">
                    <label for="title">Titolo:</label>
                    <input id="title" type="text" name="title">
                </div>
                <div class="row">
                    <label for="expires">Scadenza:</label>
                    <input id="expires" type="date" name="expires">
                </div>
                <button>Aggiungi To Do</button>
            </form>
        </div>`);

        const form = document.querySelector('#create');
        form.addEventListener('submit', (event) => 
        {
            event.preventDefault();

            const addToDO = 
            {
                title: event.target.title.value,
                completed: event.target.completed.checked,
                expires: event.target.expires.value,
            };

            fetch(API, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(addToDO)
            })
        });
}

export {add};