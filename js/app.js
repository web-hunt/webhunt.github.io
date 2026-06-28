// js/app.js

const websites = [
    {
        id: "photopea",
        name: "Photopea",
        description: "Free online Photoshop alternative.",
        url: "https://photopea.com",
        logo: "https://placehold.co/80/38bdf8/ffffff?text=P",
        category: "Photo",
        tags: ["Free", "Editing", "Design"],
        featured: true,
        trending: true,
        hiddenGem: false,
        recent: false,
        rating: 4.9,
        views: "2.4M"
    },

    {
        id: "removebg",
        name: "Remove.bg",
        description: "Remove image backgrounds instantly.",
        url: "https://remove.bg",
        logo: "https://placehold.co/80/22c55e/ffffff?text=R",
        category: "AI",
        tags: ["AI", "Free"],
        featured: false,
        trending: true,
        hiddenGem: false,
        recent: true,
        rating: 4.8,
        views: "1.8M"
    },

    {
        id: "toffeeshare",
        name: "ToffeeShare",
        description: "Fast peer-to-peer file sharing.",
        url: "https://toffeeshare.com",
        logo: "https://placehold.co/80/f97316/ffffff?text=T",
        category: "Files",
        tags: ["Files", "Free"],
        featured: false,
        trending: false,
        hiddenGem: true,
        recent: true,
        rating: 4.7,
        views: "320K"
    },

    {
        id: "windowswap",
        name: "WindowSwap",
        description: "Look through windows from around the world.",
        url: "https://window-swap.com",
        logo: "https://placehold.co/80/a855f7/ffffff?text=W",
        category: "Fun",
        tags: ["Travel", "Fun"],
        featured: false,
        trending: false,
        hiddenGem: true,
        recent: false,
        rating: 4.8,
        views: "740K"
    }
];

const search = document.querySelector("input[type='search']");
const grids = document.querySelectorAll(".card-grid");

const trendingGrid = grids[0];
const hiddenGrid = grids[1];
const recentGrid = grids[2];

function createCard(site){

    const tags = site.tags.map(tag =>
        `<span class="tag">${tag}</span>`
    ).join("");

    return `
        <div class="card">

            <img src="${site.logo}" alt="${site.name}">

            <span class="category">${site.category}</span>

            <h3>${site.name}</h3>

            <p>${site.description}</p>

            <div class="tags">
                ${tags}
            </div>

            <div class="card-buttons">

                <button class="favorite">❤</button>

                <a
                    href="website.html?id=${site.id}"
                    class="visit-btn">
                    View →
                </a>

            </div>

        </div>
    `;

}

function renderFeatured(){

    const featured = websites.find(site => site.featured);

    const card = document.querySelector(".featured-card");

    if(!card || !featured) return;

    card.innerHTML = `
        <img src="${featured.logo}" alt="${featured.name}">

        <div>

            <span class="category">${featured.category}</span>

            <h3>${featured.name}</h3>

            <p>${featured.description}</p>

            <a
                href="website.html?id=${featured.id}"
                class="visit-btn">
                Explore →
            </a>

        </div>
    `;

}

function render(){

    if(trendingGrid) trendingGrid.innerHTML = "";
    if(hiddenGrid) hiddenGrid.innerHTML = "";
    if(recentGrid) recentGrid.innerHTML = "";

    const value = search ? search.value.toLowerCase() : "";

    websites.forEach(site=>{

        const match =
            site.name.toLowerCase().includes(value) ||
            site.description.toLowerCase().includes(value) ||
            site.category.toLowerCase().includes(value) ||
            site.tags.join(" ").toLowerCase().includes(value);

        if(!match) return;

        if(trendingGrid && site.trending){
            trendingGrid.innerHTML += createCard(site);
        }

        if(hiddenGrid && site.hiddenGem){
            hiddenGrid.innerHTML += createCard(site);
        }

        if(recentGrid && site.recent){
            recentGrid.innerHTML += createCard(site);
        }

    });

}

render();
renderFeatured();

if(search){
    search.addEventListener("input",render);
}

const randomBtn = document.getElementById("randomBtn");

if(randomBtn){

    randomBtn.addEventListener("click",()=>{

        const random =
            websites[Math.floor(Math.random()*websites.length)];

        window.location.href =
            `website.html?id=${random.id}`;

    });

}
