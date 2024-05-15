///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header-section");

const bodyEl = document.querySelector("main");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

bodyEl.addEventListener("click", function () {
  headerEl.classList.remove("nav-open");
});
