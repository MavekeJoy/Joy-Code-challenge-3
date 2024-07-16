const film_details = document.getElementById("film-details")

fetch("http://localhost:6500/films")
  .then((response) => response.json())
  .then(films => 
    films.map(film => {
      const title = document.createElement("h1")
      title.textContent = film.title
      film_details.appendChild(title)




  }))
