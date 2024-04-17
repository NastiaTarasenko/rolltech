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

const buttonPrev = document.querySelector(".prev-slide-btn-wrapper"),
    buttonNext = document.querySelector(".next-slide-btn-wrapper");

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
    buttonNext.style.display = "block";
    
    currentSlide--;
    if (currentSlide === 0) buttonPrev.style.display = "none";

    slides[currentSlide].classList.add("show-to-right");

    document.querySelector(".current-slide-number").innerHTML = `${currentSlide + 1}`;
    document.querySelector(".slider-front-line").style.width = `${100 / 9 * (currentSlide + 1)}%`;
};
const nextSlide = () => {
    slides.forEach(slide => {
        slide.classList = ["slide"];
    });

    slides[currentSlide].classList.add("hide-to-left");
    buttonPrev.style.display = "block";

    currentSlide++;
    if (currentSlide === 8) buttonNext.style.display = "none";

    slides[currentSlide].classList.add("show-to-left");

    document.querySelector(".current-slide-number").innerHTML = `${currentSlide + 1}`;
    document.querySelector(".slider-front-line").style.width = `${100 / 9 * (currentSlide + 1)}%`;
};

const changeSlideByArrowKeys = (event) => {
    const pressedKey = event.key;
    if (pressedKey === "ArrowLeft" & currentSlide > 0) prevSlide();
    if (pressedKey === "ArrowRight" & currentSlide < 8) nextSlide();
}

const modalOpen = () => {
    modalWindow.style.display = "block";
    document.body.style.overflow = "hidden";

    slides.forEach(slide => {
        slide.classList = ["slide"];
    })
    slides[currentSlide].classList.add("initial-slide");

    if (currentSlide === 0) buttonPrev.style.display = "none";
    if (currentSlide === 8) buttonNext.style.display = "none";

    document.querySelector(".current-slide-number").innerHTML = `${currentSlide + 1}`;
    document.querySelector(".slider-front-line").style.width = `${100 / 9 * (currentSlide + 1)}%`;

    document.body.addEventListener("keydown", changeSlideByArrowKeys);
};

const checkDirectionOfSwiping = (startTouchX, endTouchX) => {
    if (endTouchX > startTouchX & currentSlide > 0) prevSlide();
    if (endTouchX < startTouchX & currentSlide < 8) nextSlide();
};

const changeSlideByTouch = (element) => {
    let startTouchX = 0,
        endTouchX = 0;
    element.addEventListener('touchstart', estart => {
        startTouchX = estart.changedTouches[0].screenX;
    });
    element.addEventListener('touchend', eend => {
        endTouchX = eend.changedTouches[0].screenX;
        checkDirectionOfSwiping(startTouchX, endTouchX);
    });
};

slides.forEach(slide => changeSlideByTouch(slide));

const modalClose = () => {
    modalWindow.style.display = "none";
    document.body.style.overflow = "auto";
    document.body.removeEventListener("keydown", changeSlideByArrowKeys);
};

// show and hide buttons

const showButtons = () => {
    document.querySelector(".prev-slide-btn").style.left = 0;
    document.querySelector(".next-slide-btn").style.right = 0;
};

const hideButtons = () => {
    document.querySelector(".prev-slide-btn").style.left = "-100%";
    document.querySelector(".next-slide-btn").style.right = "-100%";
};

buttonPrev.addEventListener("mouseover", () => {
    if (document.documentElement.clientWidth > 420) {
        showButtons();
        buttonPrev.addEventListener("mouseout", hideButtons);
    };   
});

buttonNext.addEventListener("mouseover", () => {
    if (document.documentElement.clientWidth > 420) {
        showButtons();
        buttonNext.addEventListener("mouseout", hideButtons);
    };
});