document.addEventListener(
    "DOMContentLoaded",
    async () => {

        await loadNavbar();

        await loadMobileNavbar();

        await loadHero();

        await loadFeaturedDishes();

        await loadMenu();

        await loadAbout();

        await loadGallery();

        await loadReviews();

        await loadReservation();

        await loadContact();

        await loadFooter();


        initMobileMenu();


        if (
            typeof initLanguageSettings
            === "function"
        ) {

            initLanguageSettings();

        }


        if (
            typeof initHeroSlider
            === "function"
        ) {

            initHeroSlider();

        }

        if (
            typeof initMenuFilter
            === "function"
        ) {
            initMenuFilter();
            initMenuShowMore();

        }

        if (typeof initGallery === "function") {
            initGallery();
        }

    }
);



async function loadNavbar() {

    const navbarModule =
        document.getElementById("navbar-module");

    if (!navbarModule) {
        return;
    }


    try {

        const response =
            await fetch("modules/navbar.html");

        if (!response.ok) {
            throw new Error("Navbar yüklenemedi.");
        }


        const html =
            await response.text();


        navbarModule.innerHTML =
            html;

    }

    catch (error) {

        console.error(
            "Desktop navbar yükleme hatası:",
            error
        );

    }

}



async function loadMobileNavbar() {

    const mobileNavbarModule =
        document.getElementById("mobile-navbar-module");

    if (!mobileNavbarModule) {
        return;
    }


    try {

        const response =
            await fetch("modules/mobile-navbar.html");

        if (!response.ok) {
            throw new Error("Mobile navbar yüklenemedi.");
        }


        const html =
            await response.text();


        mobileNavbarModule.innerHTML =
            html;

    }

    catch (error) {

        console.error(
            "Mobile navbar yükleme hatası:",
            error
        );

    }

}



function initMobileMenu() {

    const menuButton =
        document.getElementById("mobileMenuButton");

    const mobileMenu =
        document.getElementById("mobileNavbarMenu");

    const overlay =
        document.getElementById("mobileNavbarOverlay");

    const closeButton =
        document.getElementById("mobileNavbarCloseButton");


    if (
        !menuButton ||
        !mobileMenu ||
        !overlay
    ) {
        return;
    }



    function openMenu() {

        menuButton.classList.add("active");

        mobileMenu.classList.add("active");

        overlay.classList.add("active");

        menuButton.setAttribute(
            "aria-expanded",
            "true"
        );

    }



    function closeMenu() {

        menuButton.classList.remove("active");

        mobileMenu.classList.remove("active");

        overlay.classList.remove("active");

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

    }



    function toggleMenu() {

        const isOpen =
            mobileMenu.classList.contains("active");


        if (isOpen) {
            closeMenu();
        }
        else {
            openMenu();
        }

    }


 

    menuButton.addEventListener(
        "click",
        toggleMenu
    );


 

    overlay.addEventListener(
        "click",
        closeMenu
    );




    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closeMenu
        );

    }


   

    const links =
        mobileMenu.querySelectorAll(
            ".mobile-navbar-link, .mobile-navbar-reservation"
        );


    links.forEach(link => {

        link.addEventListener(
            "click",
            closeMenu
        );

    });


    

    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {
                closeMenu();
            }

        }
    );


 

    window.addEventListener(
        "resize",
        () => {

            if (window.innerWidth > 900) {
                closeMenu();
            }

        }
    );

}


async function loadHero() {

    const heroModule =
        document.getElementById(
            "hero-module"
        );


    if (!heroModule) {

        return;

    }


    try {

        const response =
            await fetch(
                "modules/hero.html"
            );


        if (
            !response.ok
        ) {

            throw new Error(
                "Hero yüklenemedi."
            );

        }


        const html =
            await response.text();


        heroModule.innerHTML =
            html;

    }

    catch (error) {

        console.error(
            "Hero yükleme hatası:",
            error
        );

    }

}
async function loadFeaturedDishes() {

    const module =
        document.getElementById(
            "featured-dishes-module"
        );


    if (!module) {
        return;
    }


    try {

        const response =
            await fetch(
                "modules/featured-dishes.html"
            );


        if (!response.ok) {

            throw new Error(
                "Featured dishes yüklenemedi."
            );

        }


        const html =
            await response.text();


        module.innerHTML =
            html;

    }

    catch (error) {

        console.error(
            "Featured dishes yükleme hatası:",
            error
        );

    }

}
async function loadMenu() {

    const menuModule =
        document.getElementById(
            "menu-module"
        );


    if (!menuModule) {
        return;
    }


    try {

        const response =
            await fetch(
                "modules/menu.html"
            );


        if (!response.ok) {

            throw new Error(
                "Menu yüklenemedi."
            );

        }


        const html =
            await response.text();


        menuModule.innerHTML =
            html;

    }

    catch (error) {

        console.error(
            "Menu yükleme hatası:",
            error
        );

    }

}
async function loadAbout() {

    const aboutModule =
        document.getElementById(
            "about-module"
        );


    if (!aboutModule) {
        return;
    }


    try {

        const response =
            await fetch(
                "modules/about.html"
            );


        if (!response.ok) {

            throw new Error(
                "About yüklenemedi."
            );

        }


        const html =
            await response.text();


        aboutModule.innerHTML =
            html;

    }

    catch (error) {

        console.error(
            "About yükleme hatası:",
            error
        );

    }

}

async function loadGallery() {

    const galleryModule =
        document.getElementById("gallery-module");

    if (!galleryModule) {
        return;
    }

    try {

        const response =
            await fetch("modules/gallery.html");

        if (!response.ok) {
            throw new Error("Gallery yüklenemedi.");
        }

        const html =
            await response.text();

        galleryModule.innerHTML =
            html;

    }

    catch (error) {

        console.error(
            "Gallery yükleme hatası:",
            error
        );

    }

}

async function loadReviews() {

    const reviewsModule =
        document.getElementById(
            "reviews-module"
        );


    if (!reviewsModule) {
        return;
    }


    try {

        const response =
            await fetch(
                "modules/reviews.html"
            );


        if (!response.ok) {

            throw new Error(
                "Reviews yüklenemedi."
            );

        }


        const html =
            await response.text();


        reviewsModule.innerHTML =
            html;

    }

    catch (error) {

        console.error(
            "Reviews yükleme hatası:",
            error
        );

    }

}


async function loadReservation() {

    const reservationModule =
        document.getElementById(
            "reservation-module"
        );


    if (!reservationModule) {
        return;
    }


    try {

        const response =
            await fetch(
                "modules/reservation.html"
            );


        if (!response.ok) {

            throw new Error(
                "Reservation yüklenemedi."
            );

        }


        const html =
            await response.text();


        reservationModule.innerHTML =
            html;

    }

    catch (error) {

        console.error(
            "Reservation yükleme hatası:",
            error
        );

    }

}

async function loadContact() {

    const contactModule =
        document.getElementById(
            "contact-module"
        );


    if (!contactModule) {
        return;
    }


    try {

        const response =
            await fetch(
                "modules/contact.html"
            );


        if (!response.ok) {

            throw new Error(
                "Contact yüklenemedi."
            );

        }


        const html =
            await response.text();


        contactModule.innerHTML =
            html;

    }

    catch (error) {

        console.error(
            "Contact yükleme hatası:",
            error
        );

    }

}

async function loadFooter() {

    const footerModule =
        document.getElementById(
            "footer-module"
        );


    if (!footerModule) {
        return;
    }


    try {

        const response =
            await fetch(
                "modules/footer.html"
            );


        if (!response.ok) {
            throw new Error(
                "Footer yüklenemedi."
            );
        }


        const html =
            await response.text();


        footerModule.innerHTML =
            html;

    }

    catch (error) {

        console.error(
            "Footer yükleme hatası:",
            error
        );

    }

}


function initMenuShowMore() {

    const menuGrid = document.querySelector(".menu-grid");

    if (!menuGrid) return;

    const menuCards = Array.from(
        menuGrid.querySelectorAll(".menu-card")
    );

    const menuSection = document.querySelector(".menu-section");

    if (!menuSection) return;

    const LIMIT = 10;

    let visibleCount = LIMIT;

    let button = document.getElementById("menuShowMore");

    if (!button) {

        const container = document.createElement("div");
        container.className = "menu-more-container";

        button = document.createElement("button");
        button.type = "button";
        button.id = "menuShowMore";
        button.className = "menu-more-button";

        container.appendChild(button);

        menuGrid.insertAdjacentElement("afterend", container);
    }

    const labels = {
        tr: "Daha Fazla Göster",
        en: "Show More",
        fr: "Afficher plus",
        es: "Mostrar más",
        ru: "Показать ещё",
        ar: "عرض المزيد"
    };

    function updateButtonLanguage() {
        const lang = document.documentElement.lang || "tr";
        button.textContent = labels[lang] || labels.tr;
    }

    function updateMenuLimit() {

        const activeCategory = document.querySelector(
            ".menu-category.active"
        );

        const category = activeCategory?.dataset.category || "all";

        const shouldLimit =
            window.innerWidth >= 768 &&
            category === "all";

        menuCards.forEach((card, index) => {

            card.classList.toggle(
                "menu-limit-hidden",
                shouldLimit && index >= visibleCount
            );

        });

        button.hidden =
            !shouldLimit ||
            visibleCount >= menuCards.length;

        updateButtonLanguage();
    }

    button.addEventListener("click", () => {
        visibleCount += LIMIT;
        updateMenuLimit();
    });

    document.querySelectorAll(".menu-category").forEach(categoryButton => {

        categoryButton.addEventListener("click", () => {
            visibleCount = LIMIT;
            updateMenuLimit();
        });

    });

    window.addEventListener("resize", updateMenuLimit);

    const languageObserver = new MutationObserver(updateButtonLanguage);

    languageObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["lang"]
    });

    updateMenuLimit();
}
