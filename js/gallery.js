function initGallery() {

    const galleryItems =
        document.querySelectorAll(
            ".gallery-item"
        );

    const lightbox =
        document.getElementById(
            "galleryLightbox"
        );

    const lightboxImage =
        document.getElementById(
            "galleryLightboxImage"
        );

    const closeButton =
        document.getElementById(
            "galleryLightboxClose"
        );


    if (
        galleryItems.length === 0 ||
        !lightbox ||
        !lightboxImage
    ) {
        return;
    }


    function openGallery(imagePath) {

        lightboxImage.src =
            imagePath;

        lightbox.classList.add(
            "active"
        );

    }


    function closeGallery() {

        lightbox.classList.remove(
            "active"
        );

        lightboxImage.src = "";

    }


    galleryItems.forEach(item => {

        item.addEventListener(
            "click",
            () => {

                const imagePath =
                    item.dataset.image;


                if (!imagePath) {
                    return;
                }


                openGallery(
                    imagePath
                );

            }
        );

    });


    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closeGallery
        );

    }


    lightbox.addEventListener(
        "click",
        event => {

            if (
                event.target === lightbox
            ) {

                closeGallery();

            }

        }
    );


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape"
            ) {

                closeGallery();

            }

        }
    );

}