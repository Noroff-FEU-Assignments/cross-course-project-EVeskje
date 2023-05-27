import { baseApiUrl, endpointApiUrl } from "./apiService.js";
import { createMessage } from "./errorMessage.js";
import {getMovie} from "./APIsingle.js";

const product = document.querySelector(".container");
const apiUrl = `${baseApiUrl}${endpointApiUrl}`;

async function createHtml() {
    const movie = await getMovie();

    product.innerHTML = '';
    product.innerHTML +=
        `<section class="product-wrapper">
            <div class="product-card">
                <h1>${movie.title}</h1>
                <p class="product-content-container">${movie.description}</p>     
                <p>Release date: ${movie.released}</p>
                <p>Rated: ${movie.rating}</p>
                <p>Genre: ${movie.genre}</p>
                <h2 id="price"></h2>
                <h3 id="sale"></h3>
            </div>
            <div class="product-card-image">
                <img src="${movie.image}" alt="Cover image of the movie" class="img">
                <a href="cart.html" class="cta" id="ctaproduct">BUY NOW</a>
            </div>
        </section>`;

    document.title = movie.title;

    if (movie.onSale === true){

        document.getElementById('sale').innerHTML += `<h3 id="sale">$ ${movie.discountedPrice}</h3>`;
        document.getElementById('price').innerHTML += `<h2 id="reduced-price">$ ${movie.price}</h2>`;
    }

    else {
        document.getElementById('price').innerHTML += `<h2>$ ${movie.price}</h2>`;
        document.getElementById('sale').innerHTML = ``;
    }

}

createHtml();