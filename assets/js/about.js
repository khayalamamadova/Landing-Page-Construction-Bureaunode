// preloader
window.addEventListener('load', () => {
  document.querySelector('.preloader').classList.add('preloader-finish')
})

// wow.js
new WOW().init();

// history slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("single-dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
//=========== burger-menu ===========
const toAddActiveClass = (eventSelector, selector) => {
  eventSelector.addEventListener("click", () => {
    selector.classList.toggle("is-active");
    eventSelector.classList.toggle("toggle");
  });
};
toAddActiveClass(
  document.querySelector(".toggle-menu"),
  document.querySelector(".hamburger-nav")
);
//=========== burger-menu ===========
