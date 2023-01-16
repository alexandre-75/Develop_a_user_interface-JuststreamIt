const myBtn = document.getElementById("myBtn")
const banner = document.getElementById("banner")
const bannerImg = document.getElementById("banner__img");
const bannerTittle = document.getElementById("banner__movie_title");
const bannerDescription = document.getElementById("banner__movie_description");

async function fetchData() {
    try {
        const response = await fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score");
        const data = await response.json();
        console.log(data)
        myBtn.value = data.results[0].id;   // je récup le numéro ID 
        console.log(myBtn.value)
        banner.value = data.results[0].url;   // je recup l'url
        const reponse = await fetch(banner.value);
        const value = await reponse.json();
        bannerImg.src = value.image_url;
        bannerTittle.innerText = value.original_title;
        bannerDescription.innerText = value.long_description;
    } catch (err) {
        console.log ('une erreur s\'est produite :', err);
    }
}
fetchData();