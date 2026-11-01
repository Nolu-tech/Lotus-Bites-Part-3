document.addEventListener("DOMContentLoaded", function () {

    // GALLERY LIGHTBOX

    const galleryImages = document.querySelectorAll(".gallery-image");

    const lightbox = document.getElementById("lightbox");

    const lightboxImage = document.getElementById("lightboxImage");

    const lightboxCaption = document.getElementById("lightboxCaption");

    const lightboxClose = document.getElementById("lightboxClose");

    if (lightbox && lightboxImage && lightboxClose) {

        galleryImages.forEach(function (image) {

            image.addEventListener("click", function () {

                lightboxImage.src = image.src;

                lightboxImage.alt = image.alt;

                if (lightboxCaption) {

                    lightboxCaption.textContent = image.alt;

                }

                lightbox.classList.add("active");

            });

        });

        function closeLightbox() {

            lightbox.classList.remove("active");

        }

        lightboxClose.addEventListener("click", closeLightbox);

        lightbox.addEventListener("click", function (event) {

            if (event.target === lightbox) {

                closeLightbox();

            }

        });

        document.addEventListener("keydown", function (event) {

            if (event.key === "Escape") {

                closeLightbox();

            }

        });

    }

});

