import { displayErrorMessage } from "./errorMessage.js";

const favContainer = document.querySelector(".continue-watching__movies");
const discoverContainer = document.querySelector(".discover .continue-watching__movies");
const apiUrl = "https://api.noroff.dev/api/v1/square-eyes/";

async function getData() {
  try {
    const response = await fetch(apiUrl); // Hent data
    const data = await response.json(); // Konverter til JSON

    // Oppdater innholdet i favContainer med dataene fra API-et
    favContainer.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
      if (i === 10) break;
      favContainer.innerHTML += `
        <div class="movies__container">
          <div>
            <img src="${data[i].image}" alt="${data[i].title}" />
          </div>
          <p>${data[i].title}</p>
          <p>${data[i].price}</p>
          <p>${data[i].genre}</p>
        </div>
      `;
    }

    // Oppdater innholdet i discoverContainer med dataene fra API-et
    discoverContainer.innerHTML = "";
    for (let i = 4; i < data.length; i++) {
      discoverContainer.innerHTML += `
        <div class="movies__container">
          <div>
            <img src="${data[i].image}" alt="${data[i].title}" />
          </div>
          <p class="title-product">${data[i].title}</p>
          <p>${data[i].price}</p>
          <p>${data[i].genre}</p>
        </div>
      `;
    }
  } catch (error) {
    console.log(error);
    displayErrorMessage();
  }
}

// Vis loader mens dataene hentes
function showLoader() {
  favContainer.innerHTML = '<div class="loader"></div>';
  discoverContainer.innerHTML = '<div class="loader"></div>';
}

// Fjern loader når dataene er hentet
function hideLoader() {
  const loaders = document.querySelectorAll(".loader");
  loaders.forEach((loader) => loader.remove());
}

// Hent data når siden er lastet
window.addEventListener("DOMContentLoaded", () => {
  showLoader();
  getData().finally(hideLoader);
});





// const favContainer = document.querySelector(".continue-watching__movies")
// const discoverContainer = document.querySelector(".discover .continue-watching__movies")
// const apiUrl = "https://api.noroff.dev/api/v1/square-eyes/";


// async function getData() {
//     try {
//         const response = await fetch(apiUrl); // Fetch the data
//         const data = await response.json(); // Process to JSON

//         for(let i = 0; i < data.length; i++) {
//             if(i === 10) break;
//             favContainer.innerHTML += `
//             <div class="movies__container">
//                 <div>
//                     <img src="${data[i].image}" alt="${data[i].title}"/>
//                 </div>
//                 <p>${data[i].title}</p>
//                 <p>${data[i].price}</p>
//                 <p>${data[i].genre}</p>
//             </div>    
//             `
//         }

//         for(let i = 4; i < data.length; i++) {
//             discoverContainer.innerHTML += `
//             <div class="movies__container">
//                 <div>
//                     <img src="${data[i].image}" alt="${data[i].title}"/>
//                 </div>
//                 <p class="title-product">${data[i].title}</p>
//                 <p>${data[i].price}</p>
//                 <p>${data[i].genre}</p>
//             </div>    
//             `
//         }


//     } catch (error) {
//         console.log(error);
//     }
// }

// getData()
