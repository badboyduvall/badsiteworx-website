/* ==========================================
   B.A.D. SITE WORX
   script.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("B.A.D. SITE WORX Loaded");

    /* ======================================
       Smooth Scrolling
    ====================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    /* ======================================
       Sticky Navigation Shadow
    ====================================== */

    const nav = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (!nav) return;

        if (window.scrollY > 50) {

            nav.style.boxShadow =
                "0 8px 25px rgba(0,0,0,.35)";

        } else {

            nav.style.boxShadow = "none";

        }

    });

    /* ======================================
       Scroll Reveal Animation
    ====================================== */

    const revealItems = document.querySelectorAll(

        ".service-card, .project, .equipment-card, .trust-box"

    );

    const observer = new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {

            threshold: 0.20

        }

    );

    revealItems.forEach((item) => {

        item.classList.add("hidden");

        observer.observe(item);

    });

    /* ======================================
       Gallery Hover Effect
    ====================================== */

    document.querySelectorAll(".gallery-grid img").forEach((img) => {

        img.addEventListener("mouseenter", () => {

            img.style.transform = "scale(1.05)";

        });

        img.addEventListener("mouseleave", () => {

            img.style.transform = "scale(1)";

        });

    });

    /* ======================================
       Video Controls
    ====================================== */

    document.querySelectorAll("video").forEach((video) => {

        video.setAttribute("playsinline", "");

        video.setAttribute("preload", "metadata");

    });

    /* ======================================
       Contact Form Validation
    ====================================== */

    const form = document.querySelector("form");

    if (form) {

        form.addEventListener("submit", (e) => {

            const name =
                form.querySelector('input[type="text"]');

            const email =
                form.querySelector('input[type="email"]');

            const phone =
                form.querySelector('input[type="tel"]');

            if (

                !name.value.trim() ||

                !email.value.trim() ||

                !phone.value.trim()

            ) {

                e.preventDefault();

                alert(

                    "Please complete all required fields."

                );

            }

        });

    }

});

/* ==========================================
   Optional Helper Functions
========================================== */

function callNow() {

    window.location.href = "tel:3525023511";

}

function textNow() {

    window.location.href = "sms:3525023511";

}

function emailUs() {

    window.location.href =

        "mailto:estimates@badsiteworx.com";

}