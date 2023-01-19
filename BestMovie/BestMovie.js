const myBtn = document.getElementById("myBtn");
const banner = document.getElementById("banner");
const bestMovieImg = document.getElementById("best_movie_img");
const bestMovieTittle = document.getElementById("best_movie_title");
const BestMovieDescription = document.getElementById("best_movie_description");

async function fetchData() {
    try {
        const response = await fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score");
        const data = await response.json();
        myBtn.value = data.results[0].id;   // I get the ID number
        banner.value = data.results[0].url;   // I get the url

        const reponse = await fetch(banner.value);
        const value = await reponse.json();
        bestMovieImg.src = value.image_url;
        bestMovieTittle.innerText = value.original_title;
        BestMovieDescription.innerText = value.long_description;
    } catch (err) {
        console.log ('une erreur s\'est produite :', err);
    }
}
fetchData();