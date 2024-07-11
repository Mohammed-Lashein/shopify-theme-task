const menuBtn = document.querySelector(".menu")
const mobileDrawerOverlay = document.querySelector(".mobile-menu__overlay")
const closeMenuBtn = document.querySelector(".close-btn")
const mobileDrawer = document.querySelector(".drawer")
const mobileMenu = document.querySelector(".mobile-menu")


function openmobileDrawer() {
  mobileDrawer.classList.remove("hidden")
  mobileDrawer.classList.add("open")
}
function closemobileDrawer() {
  mobileDrawer.classList.remove("open")
  mobileDrawer.classList.add("hidden")
}

menuBtn.addEventListener("click", openmobileDrawer)
closeMenuBtn.addEventListener('click', closemobileDrawer)
mobileDrawerOverlay.addEventListener('click', closemobileDrawer)

// animated plus
const animatedPlusBtns = document.querySelectorAll(".animated-plus-btn")
const animatedPlusSpans = document.querySelectorAll(".animated-plus");


function toggleAnimatedPlus(i) {
  animatedPlusSpans[i].classList.toggle("open")
}
animatedPlusBtns.forEach((btn,i) => {
  btn.addEventListener("click", () => toggleAnimatedPlus(i))
})


