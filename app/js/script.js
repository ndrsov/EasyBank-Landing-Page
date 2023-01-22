const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeEls = document.querySelectorAll(".has-fade");

btnHamburger.addEventListener("click", () => {
  if (header.classList.contains("open")) {
    header.classList.remove("open");
    fadeEls.forEach((el) => {
      el.classList.remove("fade-in");
      el.classList.add("fade-out");
    });
  } else {
    header.classList.add("open");
    fadeEls.forEach((el) => {
      el.classList.remove("fade-out");
      el.classList.add("fade-in");
    });
  }
});
