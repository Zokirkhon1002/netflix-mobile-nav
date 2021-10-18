const OPEN_BTN = document.querySelector(".open-btn"),
  CLOSE_BTN = document.querySelector(".close-btn"),
  NAV = document.querySelectorAll(".nav");

OPEN_BTN.addEventListener("click", () => {
  NAV.forEach((NAV_ELEMENT) => NAV_ELEMENT.classList.add("visible"));
});
CLOSE_BTN.addEventListener("click", () => {
  NAV.forEach((NAV_ELEMENT) => NAV_ELEMENT.classList.remove("visible"));
});
