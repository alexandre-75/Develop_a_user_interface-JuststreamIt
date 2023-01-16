
const carousels = document.querySelectorAll('.carousel');
let productList = document.querySelector('.item_catalog');
            console.log(productList)

let productListWidth = 0;
let productListSteps = 0;
// Ces lignes déclarent les variables productListWidth et productListSteps 
// et les initialisent à 0. productListWidth sera utilisé pour stocker la 
// largeur totale de la liste de produits et productListSteps sera utilisé
//  pour stocker le nombre de pas pour déplacer la liste de produits.


let products = document.querySelectorAll('.item');
            console.log(products)
let productAmount = 0;
let productAmountVisible = 4;
// productAmount est utilisé pour stocker le nombre total de produits et 
// productAmountVisible est utilisé pour stocker le nombre de produits visibles 
// à la fois


let carouselPrev = document.querySelector('.btn_left');
            console.log(carouselPrev)
let carouselNext = document.querySelector('.btn_right');




carousels.forEach(function(carousel) {
    carouselize(carousel);
});


function carouselize(carousel) {
    
    // Boucle pour compter les produits et ajuster la largeur de la liste de produits
    products.forEach(product => {
        productAmount++;
        productListWidth += 250;
        productList.style.width = productListWidth + "px";
    });
    
    // Function to move the product list
    function moveProductList() {
        productList.style.transform = "translateX(-" + 150 * productListSteps + "px)";
    }

    // Added event listeners for "next" and "previous" buttons
    carouselNext.addEventListener("click", function () {
        if (productListSteps < productAmount - productAmountVisible) {
            productListSteps++;
            moveProductList();
        }
    });

    carouselPrev.addEventListener("click", function () {
        if (productListSteps > 0) {
            productListSteps--;
            moveProductList();
        }
    });
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

function updateImgSrc(data, prefix, count, startIndex = 1) {
    for (let i = 0; i < count; i++) {
        const img = document.getElementById(`${prefix}${i + startIndex}`);
        img.src = data.results[i].image_url;
        img.value = data.results[i].id;
    }
}

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

function updateImgSrc(data, prefix, count, startIndex = 1) {
    for (let i = 0; i < count; i++) {
        const img = document.getElementById(`${prefix}${i + startIndex}`);
        img.src = data.results[i].image_url;
        img.value = data.results[i].id;
    }
}

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

function updateImgSrc(data, prefix, count, startIndex = 1) {
    for (let i = 0; i < count; i++) {
        const img = document.getElementById(`${prefix}${i + startIndex}`);
        img.src = data.results[i].image_url;
        img.value = data.results[i].id;
    }
}

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

function updateImgSrc(data, prefix, count, startIndex = 1) {
    for (let i = 0; i < count; i++) {
        const img = document.getElementById(`${prefix}${i + startIndex}`);
        img.src = data.results[i].image_url;
        img.value = data.results[i].id;
    }
}





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