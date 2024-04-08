document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchinput");
    const cards = document.querySelectorAll(".cataog_card");

    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.trim().toLowerCase();

        cards.forEach(function (card) {
            const cardname = card.querySelector('.cardname').textContent.trim().toLowerCase();
            if (cardname.includes(searchTerm)) {
                card.style.display = "block";
                // Удаляем атрибут data-aos="fade-up", если он присутствует
                if (card.hasAttribute("data-aos")) {
                    card.removeAttribute("data-aos");
                }
            } else {
                card.style.display = "none";
            }
        });
    });
});
