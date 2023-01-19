
const carousels = document.querySelectorAll('.carousel');
console.log(carousels)

const carouselContainer = document.querySelectorAll('carousel_container');
console.log(carouselContainer)

let itemCatalogTopRated = document.querySelector('.item_catalog_top_rated');
let itemCatalogAction = document.querySelector('.item_catalog_action');
let itemCatalogBiography = document.querySelector('.item_catalog_biography');
let itemCatalogAnimation = document.querySelector('.item_catalog_animation');
console.log(itemCatalogTopRated)
console.log(itemCatalogAction)
console.log(itemCatalogBiography)
console.log(itemCatalogAnimation)

let products = document.querySelectorAll('.item');
console.log(products)

// let btnLeftAction = document.querySelector('.btn_left_action');
// let btnRightAction = document.querySelector('.btn_right_action');

let productListWidth = 0;
let productListSteps = 0;
// Ces lignes déclarent les variables productListWidth et productListSteps 
// et les initialisent à 0. productListWidth sera utilisé pour stocker la 
// largeur totale de la liste de produits et productListSteps sera utilisé
//  pour stocker le nombre de pas pour déplacer la liste de produits.
            
let productAmount = 0;
let productAmountVisible = 4;
// productAmount est utilisé pour stocker le nombre total de produits et 
// productAmountVisible est utilisé pour stocker le nombre de produits visibles 
// à la fois


carousels.forEach(function(carousel) {
    console.log(carousels)
    carouselize(carousel);

});


function carouselize(carousel) {
    
    // Boucle pour compter les produits et ajuster la largeur de la liste de produits
    products.forEach(product => {
        productAmount++;
        productListWidth += 250;
        itemCatalogTopRated.style.width = productListWidth + "px";
        itemCatalogAction.style.width = productListWidth + "px";
        itemCatalogBiography.style.width = productListWidth + "px";
        itemCatalogAnimation.style.width = productListWidth + "px";
    });
    
    // carousel top rated movies ----------------------------------------------------------------------------------------
    
    let btnLeftTopRated = document.querySelector('.btn_left_top_rated');
    let btnRightTopRated = document.querySelector('.btn_right_top_rated');

    btnRightTopRated.addEventListener("click", function () {
        if (productListSteps < productAmount - productAmountVisible) {
            productListSteps++;
            slideTopRated();
        }
    })
    btnLeftTopRated.addEventListener("click", function () {
        if (productListSteps > 0) {
            productListSteps--;
            slideTopRated();
        }
    })
    function slideTopRated() {
        itemCatalogTopRated.style.transform = "translateX(-" + 150 * productListSteps + "px)";  
    }
    // carousel action movies ----------------------------------------------------------------------------------------

    let btnLeftAction = document.querySelector('.btn_left_action');
    let btnRightAction = document.querySelector('.btn_right_action');

    btnRightAction.addEventListener("click", function () {
        if (productListSteps < productAmount - productAmountVisible) {
            productListSteps++;
            slideAction();
        }
    })
    btnLeftAction.addEventListener("click", function () {
        if (productListSteps > 0) {
            productListSteps--;
            slideAction();
        }
    })
    function slideAction() {
        itemCatalogAction.style.transform = "translateX(-" + 150 * productListSteps + "px)";    
    }
    // carousel biography movies ----------------------------------------------------------------------------------------

    let btnLeftBiography = document.querySelector('.btn_left_biography');
    let btnRightBiography = document.querySelector('.btn_right_biography');

    btnRightBiography.addEventListener("click", function () {
        if (productListSteps < productAmount - productAmountVisible) {
            productListSteps++;
            slideBiography();
        }
    })
    btnLeftBiography.addEventListener("click", function () {
        if (productListSteps > 0) {
            productListSteps--;
            slideBiography();
        }
    })
    function slideBiography() {
        itemCatalogBiography.style.transform = "translateX(-" + 150 * productListSteps + "px)";    
    }
    // carousel Animation movies ----------------------------------------------------------------------------------------

    let btnLeftAnimation = document.querySelector('.btn_left_animation');
    let btnRightAnimation = document.querySelector('.btn_right_animation');

    btnRightAnimation.addEventListener("click", function () {
        if (productListSteps < productAmount - productAmountVisible) {
            productListSteps++;
            slideAnimation();
        }
    })
    btnLeftAnimation.addEventListener("click", function () {
        if (productListSteps > 0) {
            productListSteps--;
            slideAnimation();
        }
    })
    function slideAnimation() {
        itemCatalogAnimation.style.transform = "translateX(-" + 150 * productListSteps + "px)";    
    }

    

}



function updateImgSrc(data, prefix, count, startIndex = 1) {
    for (let i = 0; i < count; i++) {
        const img = document.getElementById(`${prefix}${i + startIndex}`);
        img.src = data.results[i].image_url;
        img.value = data.results[i].id;
    }
}

//  carousel top rated Movies -----------------------------------------------------------------------------------

async function fetchData10() {
    try {
        const response = await fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score");
        const data = await response.json();
        updateImgSrc(data, "topRatedMovies_img_", 5);
    } catch (error) {
        console.error(error);
    }
}
fetchData10();

async function fetchData11() {
    try {
        const response = await fetch("http://localhost:8000/api/v1/titles/?page=2&sort_by=-imdb_score");
        const data = await response.json();
        updateImgSrc(data, "topRatedMovies_img_", 5, 5);
    } catch (error) {
        console.error(error);
    }
}
fetchData11();

//  carousel Action Movies -----------------------------------------------------------------------------------

async function fetchData5() {
    try {
        const response = await fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&genre=Action");
        const data = await response.json();
        updateImgSrc(data, "actionMovies_img_", 5);
    } catch (error) {
        console.error(error);
    }
}
fetchData5();

async function fetchData6() {
    try {
        const response = await fetch("http://localhost:8000/api/v1/titles/?genre=Action&page=2&sort_by=-imdb_score");
        const data = await response.json();
        updateImgSrc(data, "actionMovies_img_", 5, 5);
    } catch (error) {
        console.error(error);
    }
}
fetchData6();

//  carousel Biography Movies -----------------------------------------------------------------------------------

async function fetchData() {
    try {
        const response = await fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&genre=Biography");
        const data = await response.json();
        updateImgSrc(data, "biographyMovies_img_", 5);
    } catch (error) {
        console.error(error);
    }
}
fetchData();

async function fetchData2() {
    try {
        const response = await fetch("http://localhost:8000/api/v1/titles/?genre=Biography&page=2&sort_by=-imdb_score");
        const data = await response.json();
        updateImgSrc(data, "biographyMovies_img_", 5, 5);
    } catch (error) {
        console.error(error);
    }
}
fetchData2();

//  carousel Animation Movies -----------------------------------------------------------------------------------

async function fetchData3() {
    try {
        const response = await fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&genre=Animation");
        const data = await response.json();
        updateImgSrc(data, "animationMovies_img_", 4);
    } catch (error) {
        console.error(error);
    }
}
fetchData3();

async function fetchData4() {
    try {
        const response = await fetch("http://localhost:8000/api/v1/titles/?genre=Animation&page=2&sort_by=-imdb_score");
        const data = await response.json();
        updateImgSrc(data, "animationMovies_img_", 3, 5);
    } catch (error) {
        console.error(error);
    }
}
fetchData4();

const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];

myBtn.addEventListener('click', () => {
    modal.style.display = "block";
    getModalData(myBtn.value);
});
for (buttons of products) {
    buttons.onclick = function () {
        let clicked = this.value;
        modal.style.display = "block";
        getModalData(clicked);
    }
};
span.addEventListener('click', () => {
    modal.style.display = "none";
});