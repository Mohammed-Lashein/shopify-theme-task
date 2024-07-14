const cartDrawer = document.querySelector(".cart-drawer");
const cartIcons = document.querySelectorAll(".shopping-cart-icon")
// cartIcons will be of length 2 since we have 2 icons one in each nav 
const cartOverlay = document.querySelector(".cart__overlay")
const closeBtn = document.querySelector(".cart-close-btn")

function openCart() {
  cartDrawer.classList.remove("hidden")
  cartDrawer.classList.add("open")
}
function closeCart() {
  cartDrawer.classList.remove("open")
  cartDrawer.classList.add("hidden")
}


cartIcons.forEach((icon) => {
  icon.addEventListener("click", openCart)
})
cartOverlay.addEventListener("click", closeCart)
closeBtn.addEventListener("click", closeCart)
