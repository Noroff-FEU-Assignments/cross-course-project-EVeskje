// const data = 
//     {
//         id: "352ba432-5b5d-4ccc-9aba-f2704c500cf3",
//         title: "Hobbs & Shaw",
//         description: "Lawman Luke Hobbs (Dwayne 'The Rock' Johnson) and outcast Deckard Shaw (Jason Statham) form an unlikely alliance when a cyber-genetically enhanced villain threatens the future of humanity.",
//         genre: "Action",
//         rating: "6.5",
//         released: "2019",
//         price: 129.99,
//         discountedPrice: 119.99,
//         onSale: true,
//         image: "https://api.noroff.dev/images/square-eyes/0-hobbs-and-shaw.jpg",
//         tags: [
//             "gamehub",
//             "game"
//         ],
//         favorite: true
//     }
// ;

// console.log(data.title, data.onSale);

const favContainer = document.querySelector(".continue-watching__movies")
const discoverContainer = document.querySelector(".discover .continue-watching__movies")
const apiUrl = "https://api.noroff.dev/api/v1/square-eyes/";

async function getData() {
    try {
        const response = await fetch(apiUrl); // Fetch the data
        const data = await response.json(); // Process to JSON

        for(let i = 0; i < data.length; i++) {
            if(i === 4) break;
            favContainer.innerHTML += `
            <div class="movies__container">
                <div>
                    <img src="${data[i].image}" alt="${data[i].title}"/>
                </div>
                <p>${data[i].title}</p>
                <p>${data[i].price}</p>
            </div>    
            `
        }

        for(let i = 4; i < data.length; i++) {
            discoverContainer.innerHTML += `
            <div class="movies__container">
                <div>
                    <img src="${data[i].image}" alt="${data[i].title}"/>
                </div>
                <p>${data[i].title}</p>
                <p>${data[i].price}</p>
            </div>    
            `
        }

    } catch (error) {
        console.log(error);
    }
}

getData()

