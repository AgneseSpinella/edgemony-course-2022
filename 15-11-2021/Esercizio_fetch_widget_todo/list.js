import { render } from './utils.js';

const List = (data) => 
{
    const elements = data.map(item => `
        <li>
            <label>
                <input type="checkbox" ${item.completed ? 'checked' : ''}>
                ${item.title}
                <br>
                ${item.expires}
            </label>
        </li>`)
        .join('');

    const container = document.querySelector('#container');
    render(container, `
        <ul>${elements}</ul>`);
};

export {List};