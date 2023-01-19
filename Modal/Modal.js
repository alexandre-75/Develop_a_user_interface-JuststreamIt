const movieTitle = document.getElementById("movie_title");
const movieGenre = document.getElementById("movie_genre");
const movieReleaseDate = document.getElementById("movie_release_date");
const movieRated = document.getElementById("movie_rated");
const movieImbdScore = document.getElementById("movie_imdb_score");
const movieDirectors = document.getElementById("movie_directors");
const movieActors = document.getElementById("movie_actors");
const movieDuration = document.getElementById("movie_duration");
const movieNativeCountries = document.getElementById("movie_native_countries");
const movieResultBoxOffice = document.getElementById("movie_result_box_office");
const movieResume = document.getElementById("movie_resume");
const movieImg = document.getElementById("movie_image");


// The first function, getModalData, focuses on retrieving data from the API,
async function getModalData(id) {
    try {
        const response = await fetch(`http://localhost:8000/api/v1/titles/${id}`);
        const data = await response.json();
        console.log(data)
        const movieData = {
            title: data.original_title,
            genre: data.genres,
            releaseDate: data.year,
            rated: data.rated,
            imdbScore: data.imdb_score,
            directors: data.directors,
            actors: data.actors,
            duration: data.duration,
            countries: data.countries,
            boxOffice: data.worldwide_gross_income,
            resume: data.long_description,
            image: data.image_url
        }
        updateModal(movieData);
    } catch (err) {
        console.log("une erreur s'est produite :", err);
    }
}
// The second function, updateModal, focuses on updating the user interface with the received data.
function updateModal(data) {
    movieTitle.innerText = data.title;
    movieGenre.innerText = data.genre;
    movieReleaseDate.innerText = data.releaseDate;
    movieRated.innerText = data.rated;
    movieImbdScore.innerText = `${data.imdbScore} /10`;
    movieDirectors.innerText = data.directors;
    movieActors.innerText = data.actors;
    movieDuration.innerText = `${data.duration} min`;
    movieNativeCountries.innerText = data.countries;
    movieResultBoxOffice.innerText = `${data.boxOffice} $`;
    movieResume.innerText = data.resume;
    movieImg.src = data.image;
}




