const menuBtn = document.querySelector(".menu")
const mobileDrawerOverlay = document.querySelector(".mobile-menu__overlay")
const closeMenuBtn = document.querySelector(".close-btn")
const mobileDrawer = document.querySelector(".drawer")
const mobileMenu = document.querySelector(".mobile-menu")


// To check that elements are present
// console.log(menuBtn);
// console.log(mobileDrawerOverlay);
// console.log(closeMenuBtn);
// console.log(mobileDrawer);

function openmobileDrawer() {
  mobileDrawer.classList.remove("hidden")
  mobileMenu.style.transform = "translateX(0)";
}
function closemobileDrawer() {
  mobileMenu.style.transform = "translateX(-100%)"
  mobileDrawer.classList.add("hidden")
}

menuBtn.addEventListener("click", openmobileDrawer)
closeMenuBtn.addEventListener('click', closemobileDrawer)
mobileDrawerOverlay.addEventListener('click', closemobileDrawer)

// animated plus
const animatedPlusBtn = document.querySelector(".animated-plus-btn")
const animatedPlus = document.querySelector(".animated-plus");

function toggleAnimatedPlus() {
  animatedPlus.classList.toggle("open")
}
animatedPlusBtn.addEventListener('click', toggleAnimatedPlus)


