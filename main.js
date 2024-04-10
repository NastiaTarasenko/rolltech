window.addEventListener("load", () => {
    document.getElementById("body").style.display = "block";
});

var MoreLessBtn = document.querySelector(".more-btn");
    btnArrow = document.querySelector(".more-arrow");
    btnText = document.querySelector(".btn-text");
    products = document.querySelector(".gallery");

MoreLessBtn.addEventListener("click", () => {
    btnArrow.classList.toggle("rotated-arrow");
    products.classList.toggle("products-show-all");
    if (btnText.innerHTML === "більше") {
        btnText.innerHTML = "менше";
    } else {
        btnText.innerHTML = "більше";
    }
});

// modal window

const images = document.querySelectorAll(".gallery-image");
const modalWindow = document.querySelector(".gallery-modal-wrapper");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

const modalOpen = () => {
    modalWindow.style.display = "block";
    document.body.style.overflow = "hidden";

    slides.forEach(slide => {
        slide.classList = ["slide"];
    })
    slides[currentSlide].classList.add("initial-slide");
}

images.forEach(image => {
    image.addEventListener("click", () => {
        currentSlide = [...images].indexOf(image);
        modalOpen();
    });
});

const prevSlide = () => {
    slides.forEach(slide => {
        slide.classList = ["slide"];
    });
    slides[currentSlide].classList.add("hide-to-right");
    
    currentSlide--;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    
    slides[currentSlide].classList.add("show-to-right");
};
const nextSlide = () => {
    slides.forEach(slide => {
        slide.classList = ["slide"];
    });

    slides[currentSlide].classList.add("hide-to-left");

    currentSlide++;
    if (currentSlide >= slides.length) currentSlide = 0;

    slides[currentSlide].classList.add("show-to-left");
};
const changeSlideByTouch = (element) => {
    element.addEventListener('touchstart', estart => {
        startTouchX = estart.changedTouches[0].screenX;
        element.addEventListener('touchend', eend => {
            endTouchX = eend.changedTouches[0].screenX;
            if (endTouchX > startTouchX) prevSlide();
            else if (endTouchX < startTouchX) nextSlide();
        });
    });
}

slides.forEach(slide => changeSlideByTouch(slide));

const modalClose = () => {
    modalWindow.style.display = "none";
    document.body.style.overflow = "auto";
};