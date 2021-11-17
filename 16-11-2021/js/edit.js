import { render, API } from "./utils.js";

const Edit = (id = 0 ) => {
    fetch(`${API}/${id}`)
    .then((response) => response.json())
    .then((movie) => {
    const container = document.querySelector("#container")
    render (container,  `<div>
    <h3>Aggiungi una nuova scheda</h3>
    <form id="create">
      <div class="row">
        <label for="title">Titolo:</label>
        <input type="text" id="title" name="title" 
        value=${movie.title}/>
      </div>

      <div class="row">
        <label for="poster">Poster:</label>
        <input type="text" id="poster" name="poster"
        value=${movie.poster} />
      </div>

      <div class="row">
        <label for="year">Anno:</label>
        <input type="number" min="1900" value="value=${movie.poster}" id="year" name="year" />
      </div>

      <div class="row">
        <label for="description">Descrizione:</label>
        <textarea id="description" name="description"
        ${movie.poster}></textarea>
      </div>

      <button>Aggiorna scheda</button>
    </form>

    <a href="#" id="back">Torna alla home</a>
  </div>`)

    
    })
}
export {Edit}