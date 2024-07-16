const film_details = document.getElementById("film-details")

fetch("http://localhost:6500/films")
  .then((response) => response.json())
  .then(films => 
    films.map(film => {
      const title = document.createElement("h1")
      title.textContent = film.title
      film_details.appendChild(title)

      const img = document.createElement("img")
      img.src = film.poster
      film_details.appendChild(img)

      const runtime =document.createElement("h4")
      runtime.textContent = film.runtime
      film_details.appendChild(runtime)

      const capacity = document.createElement("h4")
      capacity.textContent = film.capacity
      film_details.appendChild(capacity)

      const description = document.createElement("p")
      description.textContent = film.description
      film_details.appendChild(description)

      const showtime = document.createElement("h4")
      showtime.textContent = film.showtime
      film_details.appendChild(showtime)

      const tickets_sold =document.createElement("h4")
      tickets_sold.textContent = film.tickets_sold
      film_details.appendChild(tickets_sold)

  }))
