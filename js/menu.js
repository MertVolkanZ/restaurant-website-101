
function initMenuFilter() {

    const categoryButtons =
        document.querySelectorAll(".menu-category");

    const menuCards =
        document.querySelectorAll(".menu-card");

    const menuGrid =
        document.querySelector(".menu-grid");

    const showMoreButton =
        document.getElementById("menuShowMore");

    if (
        categoryButtons.length === 0 ||
        menuCards.length === 0
    ) {
        return;
    }

    const initialLimit = 10;
    const loadAmount = 10;

    let currentCategory = "all";
    let visibleLimit = initialLimit;


    function updateMenu() {

        const isDesktop =
            window.innerWidth >= 900;

        let visibleIndex = 0;

        menuCards.forEach(card => {

            const matchesCategory =
                currentCategory === "all" ||
                card.dataset.category === currentCategory;

            card.classList.toggle(
                "menu-hidden",
                !matchesCategory
            );

            if (!matchesCategory) {
                card.classList.remove("menu-limit-hidden");
                return;
            }

            const shouldLimit =
                isDesktop &&
                currentCategory === "all";

            const shouldHide =
                shouldLimit &&
                visibleIndex >= visibleLimit;

            card.classList.toggle(
                "menu-limit-hidden",
                shouldHide
            );

            visibleIndex++;

        });


        if (showMoreButton) {

            const hasMore =
                currentCategory === "all" &&
                isDesktop &&
                visibleIndex > visibleLimit;

            showMoreButton.hidden = !hasMore;

        }

    }


    function changeCategory(category) {

        currentCategory = category;

        visibleLimit = initialLimit;

        categoryButtons.forEach(button => {

            const active =
                button.dataset.category === category;

            button.classList.toggle("active", active);

            button.setAttribute(
                "aria-pressed",
                String(active)
            );

        });

        updateMenu();

        if (menuGrid) {
            menuGrid.scrollLeft = 0;
        }

    }


    categoryButtons.forEach(button => {

        button.addEventListener("click", () => {

            const category =
                button.dataset.category || "all";

            changeCategory(category);

        });

    });


    if (showMoreButton) {

        showMoreButton.addEventListener("click", () => {

            visibleLimit += loadAmount;

            updateMenu();

        });

    }


    window.addEventListener(
        "resize",
        updateMenu
    );


    changeCategory("all");

}
    