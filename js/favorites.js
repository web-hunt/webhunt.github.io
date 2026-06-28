// js/favorites.js

const STORAGE_KEY = "webhunt-favorites";

function getFavorites() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function saveFavorites(favorites) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
}

function isFavorite(id) {
    return getFavorites().includes(id);
}

function toggleFavorite(id) {

    let favorites = getFavorites();

    if (favorites.includes(id)) {

        favorites = favorites.filter(item => item !== id);

    } else {

        favorites.push(id);

    }

    saveFavorites(favorites);

    updateFavoriteButtons();

}

function updateFavoriteButtons() {

    document.querySelectorAll(".favorite").forEach(button => {

        const id = button.dataset.id;

        if (!id) return;

        if (isFavorite(id)) {

            button.textContent = "❤️";
            button.classList.add("active");

        } else {

            button.textContent = "🤍";
            button.classList.remove("active");

        }

    });

}

document.addEventListener("click", e => {

    if (!e.target.classList.contains("favorite")) return;

    toggleFavorite(e.target.dataset.id);

});

document.addEventListener("DOMContentLoaded", updateFavoriteButtons);
