const API ="https://edgemony-backend.herokuapp.com/todos";

const render = (container, content) =>
{
    container.innerHTML = content;
};

export { API, render };
