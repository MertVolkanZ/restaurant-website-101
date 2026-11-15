function initHeroSlider() {

    const slides =
        document.querySelectorAll(
            ".hero-slide"
        );

    const dots =
        document.querySelectorAll(
            ".hero-dot"
        );


    if (
        slides.length === 0 ||
        dots.length === 0
    ) {
        return;
    }


    let currentSlide = 0;

    let intervalId = null;

    const slideDuration = 10000;


    function showSlide(index) {

        if (
            index < 0 ||
            index >= slides.length
        ) {
            return;
        }


        slides.forEach(slide => {
            slide.classList.remove("active");
        });


        dots.forEach(dot => {
            dot.classList.remove("active");
        });


        slides[index].classList.add("active");

        dots[index].classList.add("active");

        currentSlide = index;

    }


    function nextSlide() {

        const nextIndex =
            (currentSlide + 1) %
            slides.length;


        showSlide(nextIndex);

    }


    function stopSlider() {

        if (intervalId) {

            clearInterval(intervalId);

            intervalId = null;

        }

    }


    function startSlider() {

        stopSlider();


        intervalId =
            setInterval(
                nextSlide,
                slideDuration
            );

    }


    dots.forEach(dot => {

        dot.addEventListener(
            "click",
            function () {

                const index =
                    Number(
                        this.dataset.slide
                    );


                if (
                    Number.isNaN(index)
                ) {
                    return;
                }


                showSlide(index);

                startSlider();

            }
        );

    });


    document.addEventListener(
        "visibilitychange",
        () => {

            if (document.hidden) {
                stopSlider();
            }
            else {
                startSlider();
            }

        }
    );


    showSlide(0);

    startSlider();

}