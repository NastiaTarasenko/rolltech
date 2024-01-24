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
