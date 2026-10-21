/* =========================================================
   EVERAFTER WEDDINGS
   JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       MOBILE NAVIGATION
       ===================================================== */

    const menuToggle =
        document.querySelector(".menu-toggle");

    const mainNav =
        document.querySelector(".main-nav");

    const navLinks =
        document.querySelector(".nav-links");


    const navigation =
        mainNav || navLinks;


    if (menuToggle && navigation) {

        menuToggle.addEventListener("click", function () {

            navigation.classList.toggle("open");

            const isOpen =
                navigation.classList.contains("open");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );

        });


        navigation
            .querySelectorAll("a")
            .forEach(function (link) {

                link.addEventListener("click", function () {

                    navigation.classList.remove("open");

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                });

            });

    }


    /* =====================================================
       MOCK FORMS
       ===================================================== */

    const bookingForm =
        document.querySelector("#bookingForm");

    const contactForm =
        document.querySelector("#contactForm");

    const toast =
        document.querySelector("#toast");


    function showToast(message) {

        if (!toast) {
            return;
        }

        toast.textContent = message;

        toast.classList.add("show");


        setTimeout(function () {

            toast.classList.remove("show");

        }, 4500);

    }


    /* =====================================================
       BOOKING FORM
       ===================================================== */

    if (bookingForm) {

        bookingForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const nameInput =
                    bookingForm.querySelector(
                        "[name='name']"
                    );


                const name =
                    nameInput &&
                    nameInput.value.trim()
                        ? nameInput.value.trim()
                        : "there";


                showToast(
                    "Thank you, " +
                    name +
                    "! Your consultation request is part of this website mockup — no real booking was submitted."
                );


                bookingForm.reset();

            }
        );

    }


    /* =====================================================
       CONTACT FORM
       ===================================================== */

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                showToast(
                    "Thank you! Your message was received by this website mockup. No information was actually sent."
                );


                contactForm.reset();

            }
        );

    }


    /* =====================================================
       CURRENT YEAR
       ===================================================== */

    document
        .querySelectorAll(
            "[data-year], #currentYear"
        )
        .forEach(function (element) {

            element.textContent =
                new Date().getFullYear();

        });


    /* =====================================================
       SCROLL ANIMATIONS
       ===================================================== */

    const animatedElements =
        document.querySelectorAll(
            ".feature-card, " +
            ".service-card, " +
            ".gallery-item, " +
            ".contact-detail, " +
            ".form-card, " +
            ".stat"
        );


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.style.opacity =
                                    "1";

                                entry.target.style.transform =
                                    "translateY(0)";

                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.08
                }
            );


        animatedElements.forEach(
            function (element, index) {

                element.style.opacity = "0";

                element.style.transform =
                    "translateY(25px)";

                element.style.transition =
                    "opacity 0.7s ease, transform 0.7s ease";

                element.style.transitionDelay =
                    (index % 4) * 0.08 + "s";


                observer.observe(element);

            }
        );

    }


    /* =====================================================
       HEADER SHADOW ON SCROLL
       ===================================================== */

    const header =
        document.querySelector(".site-header");


    if (header) {

        window.addEventListener(
            "scroll",
            function () {

                if (window.scrollY > 40) {

                    header.style.boxShadow =
                        "0 10px 35px rgba(36,23,20,0.2)";

                } else {

                    header.style.boxShadow =
                        "none";

                }

            }
        );

    }

});