
(() => {
    const desktopNavbar = document.getElementById("navbar-module");
    const mobileNavbar = document.getElementById("mobile-navbar-module");

    const SHOW_AT_TOP = 100;
    const SCROLL_THRESHOLD = 12;

    let lastScrollY = Math.max(0, window.scrollY);
    let accumulatedScroll = 0;
    let ticking = false;

    function showNavbar(navbar) {
        navbar?.classList.remove("navbar-hidden");
    }

    function hideNavbar(navbar) {
        navbar?.classList.add("navbar-hidden");
    }

    function updateNavbar() {
        const currentScrollY = Math.max(0, window.scrollY);
        const difference = currentScrollY - lastScrollY;

        lastScrollY = currentScrollY;
        ticking = false;

        const isMobile = window.innerWidth <= 900;

        const activeNavbar = isMobile
            ? mobileNavbar
            : desktopNavbar;

        const inactiveNavbar = isMobile
            ? desktopNavbar
            : mobileNavbar;

        showNavbar(inactiveNavbar);

        if (!activeNavbar) return;

        if (currentScrollY <= SHOW_AT_TOP) {
            showNavbar(activeNavbar);
            accumulatedScroll = 0;
            return;
        }

        if (
            activeNavbar.contains(document.activeElement) ||
            (isMobile &&
                document.getElementById("mobileNavbarMenu")
                    ?.classList.contains("active"))
        ) {
            showNavbar(activeNavbar);
            accumulatedScroll = 0;
            return;
        }

        if (
            (difference > 0 && accumulatedScroll < 0) ||
            (difference < 0 && accumulatedScroll > 0)
        ) {
            accumulatedScroll = 0;
        }

        accumulatedScroll += difference;

        if (accumulatedScroll >= SCROLL_THRESHOLD) {
            hideNavbar(activeNavbar);
            accumulatedScroll = 0;
        } else if (accumulatedScroll <= -SCROLL_THRESHOLD) {
            showNavbar(activeNavbar);
            accumulatedScroll = 0;
        }
    }

    function handleScroll() {
        if (ticking) return;

        ticking = true;
        requestAnimationFrame(updateNavbar);
    }

    window.addEventListener("scroll", handleScroll, {
        passive: true
    });

    window.addEventListener("resize", () => {
        lastScrollY = Math.max(0, window.scrollY);
        accumulatedScroll = 0;

        showNavbar(desktopNavbar);
        showNavbar(mobileNavbar);
    });

    updateNavbar();
})();
