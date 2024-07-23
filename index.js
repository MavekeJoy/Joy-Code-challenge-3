const film_details = document.getElementById("film-details");
const film_titles = document.getElementById("titles");
const url = "http://localhost:5300/films";

// Fetching And Desplaying the First Movie only

document.addEventListener('DOMContentLoaded', () => {
  MovieDesc(1); 
});

function MovieDesc(filmId) {
  const urlApi = `${url}/${filmId}`;
  
  fetch(urlApi)
    .then((res) => res.json())
    .then((film) => {
      const description = document.querySelector("#film-details");
      description.innerHTML = `
        <h1>${film.title}</h1>
        <div>
          <p>${film.description}</p>
        </div>
        <h1>Movie Starts at: ${film.showtime}</h1>
        <h2>Tickets Sold: ${film.tickets_sold}</h2>
        <img src="${film.poster}" alt="${film.title}">
        <button>Buy Ticket</button>
      `;
  
    })
    }
    



//Fetching the Movies List Only

fetch(url)
  .then(response => response.json())
  .then(films => {
    films.map(film => {
      const title = document.createElement("li");
      title.textContent = film.title;
      
      
      title.addEventListener('click', () => MovieDesc(film.id));
      
      film_titles.appendChild(title);
    });
  });

// Fetching Movie Descriptions once the title is clicked
function MovieDesc(filmId) {
  const urlApi = `${url}/${filmId}`;
  
  
  fetch(urlApi)
    .then((res) => res.json())
    .then((film) => {
      const description = document.querySelector("#film-details");
      description.innerHTML = `
        <h1>${film.title}</h1>
        <div>
          <p>${film.description}</p>
        </div>
        <h1>Movie Starts at: ${film.showtime}</h1>
        <h2>Tickets Sold: ${film.tickets_sold}</h2>
        <img src="${film.poster}" alt="${film.title}">
        <button id = "buy-ticket">Buy Ticket</button>
      `;
    });
}

