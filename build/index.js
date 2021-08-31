import macy from "./_snowpack/pkg/macy.js";

var macyInstance = macy({
  // See below for all available options.
  container: ".grid",
  breakAt: {
    1200: 5,
    940: 3,
    520: 2,
    400: 2,
  },
});

//nav
let burger = document.querySelector(".burger");
let navItems = document.querySelector(".nav-items");

function toggleBurger() {
  let close = document.querySelector("#menuClose");
  let open = document.querySelector("#menuOpen");

  close.classList.toggle("toggle-close");
  open.classList.toggle("toggle-open");
}
function toggleNav() {
  navItems.classList.toggle("toggle-nav");
  toggleBurger();
}
burger.addEventListener("click", toggleNav);
