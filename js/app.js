// js/app.js

const websites = [
    {
        id: "photopea",
        name: "Photopea",
        description: "Free online Photoshop alternative.",
        url: "https://photopea.com",
        logo: "https://placehold.co/80/38bdf8/ffffff?text=P",
        category: "Photo",
        tags: ["Free","Editing","Design"],
        trending: true,
        hiddenGem: false,
        recent: false,
        rating: 4.9,
        views: 2400000
    },
    {
        id: "removebg",
        name: "Remove.bg",
        description: "Remove image backgrounds instantly.",
        url: "https://remove.bg",
        logo: "https://placehold.co/80/22c55e/ffffff?text=R",
        category: "AI",
        tags: ["AI","Free"],
        trending: true,
        hiddenGem: false,
        recent: true,
        rating: 4.8,
        views: 1800000
    },
    {
        id: "toffeeshare",
        name: "ToffeeShare",
        description: "Peer-to-peer file sharing.",
        url: "https://toffeeshare.com",
        logo: "https://placehold.co/80/f97316/ffffff?text=T",
        category: "Files",
        tags: ["Files","Free"],
        trending: false,
        hiddenGem: true,
        recent: true,
        rating: 4.7,
        views: 320000
    },
    {
        id: "windowswap",
        name: "WindowSwap",
        description: "Look through windows around the world.",
        url: "https://window-swap.com",
        logo: "https://placehold.co/80/a855f7/ffffff?text=W",
        category: "Fun",
        tags: ["Travel","Fun"],
        trending: false,
        hiddenGem: true,
        recent: false,
        rating: 4.8,
        views: 740000
    }
];

const grid = document.querySelector(".card-grid");

const searchInput = document.getElementById("searchInput");

const categoryFilter = document.getElementById("categoryFilter");

const sortFilter = document.getElementById("sortFilter");

const trendingFilter = document.getElementById("trendingFilter");

const hiddenFilter = document.getElementById("hiddenFilter");

const recentFilter = document.getElementById("recentFilter");

const resultTitle = document.getElementById("resultTitle");

function createCard(site){

    return `

    <div class="card">

        <img src="${site.logo}" alt="${site.name}">

        <span class="category">

            ${site.category}

        </span>

        <h3>${site.name}</h3>

        <p>${site.description}</p>

        <div class="tags">

            ${site.tags.map(tag=>`<span class="tag">${tag}</span>`).join("")}

        </div>

        <div class="card-buttons">

            <button class="favorite">

                ❤

            </button>

            <a
                href="website.html?id=${site.id}"
                class="visit-btn">

                View →

            </a>

        </div>

    </div>

    `;

}

function render(){

    let data = [...websites];

    const search = searchInput.value.toLowerCase();

    if(search){

        data = data.filter(site=>

            site.name.toLowerCase().includes(search) ||

            site.description.toLowerCase().includes(search) ||

            site.category.toLowerCase().includes(search) ||

            site.tags.join(" ").toLowerCase().includes(search)

        );

    }

    if(categoryFilter.value !== "all"){

        data = data.filter(site=>

            site.category === categoryFilter.value

        );

    }

    if(trendingFilter.checked){

        data = data.filter(site=>site.trending);

    }

    if(hiddenFilter.checked){

        data = data.filter(site=>site.hiddenGem);

    }

    if(recentFilter.checked){

        data = data.filter(site=>site.recent);

    }

    switch(sortFilter.value){

        case "rating":

            data.sort((a,b)=>b.rating-a.rating);

            break;

        case "az":

            data.sort((a,b)=>

                a.name.localeCompare(b.name)

            );

            break;

        case "popular":

            data.sort((a,b)=>b.views-a.views);

            break;

        case "random":

            data.sort(()=>Math.random()-0.5);

            break;

    }

    resultTitle.textContent = `Results (${data.length})`;

    grid.innerHTML = "";

    data.forEach(site=>{

        grid.innerHTML += createCard(site);

    });

}

searchInput.addEventListener("input",render);

categoryFilter.addEventListener("change",render);

sortFilter.addEventListener("change",render);

trendingFilter.addEventListener("change",render);

hiddenFilter.addEventListener("change",render);

recentFilter.addEventListener("change",render);

render();
