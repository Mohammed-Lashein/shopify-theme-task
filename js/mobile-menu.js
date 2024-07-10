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
  mobileDrawer.classList.add("open")
  // mobileMenu.style.transform = "translateX(0)";
}
function closemobileDrawer() {
  mobileDrawer.classList.remove("open")
  mobileDrawer.classList.add("hidden")
  // mobileMenu.style.transform = ""
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


