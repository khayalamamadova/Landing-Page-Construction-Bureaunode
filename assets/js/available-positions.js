// preloader
window.addEventListener('load', () => {
  document.querySelector('.preloader').classList.add('preloader-finish')
})

// wow.js
new WOW().init();


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

