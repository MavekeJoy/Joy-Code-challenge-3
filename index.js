const movie_details = document.getElementById("movie-details")
const movie_titles = document.getElementById("titles")
const url = "http://localhost:7000/films"
fetch(url)


.then(response => response.json())
.then(films => 
films.map(film => {
      const title = document.createElement("li");
      title.textContent = film.title;
      
      
 

 
  
  fetch(urlApi)
    .then((res) => res.json())
    .then((movie) => {
      const description = document.querySelector("#movie-details");
      description.innerHTML = `
          <h1>${movie.title}</h1>
    <div>
          <p>${movie.description}</p>
    </div>
    <h1> Movie Starts at : ${movie.showtime}</h1>
    <h2>Tickets Sold: ${movie.tickets_sold}</h2>
          <img src="${movie.poster}" alt="${movie.title}">
`;
    });
}