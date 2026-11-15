const savedDarkmode =
    localStorage.getItem("darkmode");


if (savedDarkmode === "active") {

    document.body.classList.add("darkmode");

}


document.addEventListener("click", function (event) {

    const themeButton =
        event.target.closest(
            "#theme-switch, #mobile-theme-switch"
        );


    if (!themeButton) {
        return;
    }


    const darkmodeActive =
        document.body.classList.toggle("darkmode");


    if (darkmodeActive) {

        localStorage.setItem(
            "darkmode",
            "active"
        );

    }

    else {

        localStorage.setItem(
            "darkmode",
            "inactive"
        );

    }

});