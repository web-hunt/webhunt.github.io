// js/website.js

const params = new URLSearchParams(window.location.search);
const websiteId = params.get("id");

const website = websites.find(site => site.id === websiteId);

if (!website) {

    document.querySelector(".website-container").innerHTML = `
        <h1>Website Not Found</h1>
        <p>The website you're looking for doesn't exist.</p>
        <a href="index.html" class="visit-btn">← Back to Home</a>
    `;

} else {

    document.title = `${website.name} - WebHunt`;

    document.getElementById("websiteLogo").src = website.logo;

    document.getElementById("websiteLogo").alt = website.name;

    document.getElementById("websiteName").textContent =
        website.name;

    document.getElementById("websiteCategory").textContent =
        website.category;

    document.getElementById("websiteRating").textContent =
        `⭐ ${website.rating}`;

    document.getElementById("websiteViews").textContent =
        `👁 ${website.views}`;

    document.getElementById("websiteDescription").textContent =
        website.description;

    document.getElementById("visitWebsite").href =
        website.url;

    const tags = document.getElementById("websiteTags");

    website.tags.forEach(tag => {

        const span = document.createElement("span");

        span.className = "tag";

        span.textContent = tag;

        tags.appendChild(span);

    });

    const similar = document.getElementById("similarWebsites");

    websites
        .filter(site =>
            site.category === website.category &&
            site.id !== website.id
        )
        .slice(0,4)
        .forEach(site => {

            const card = document.createElement("div");

            card.className = "card";

            card.innerHTML = `

                <img src="${site.logo}" alt="${site.name}">

                <span class="category">${site.category}</span>

                <h3>${site.name}</h3>

                <p>${site.description}</p>

                <div class="tags">
                    ${site.tags.map(tag =>
                        `<span class="tag">${tag}</span>`
                    ).join("")}
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

            `;

            similar.appendChild(card);

        });

}
