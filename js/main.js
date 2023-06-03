$(document).ready(function () {
  $(".first-view__slick").slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    arrows: false,
  });
});

/* shopping cart */
const body = document.body;

let scrollBarEl = window.innerWidth - body.clientWidth;

const btnShopCart = document.querySelector(".header__cart");
const shopCart = document.querySelector(".popup");

btnShopCart.addEventListener("click", function () {
  shopCart.classList.add("open");
  body.style.overflow = "hidden";
  body.style.paddingRight = scrollBarEl + "px";
});

shopCart.addEventListener("click", function (e) {
  console.dir(e.target);
  if (e.target.nodeName === "BUTTON" || e.target.className === "popup open") {
    shopCart.classList.remove("open");
    document.body.style.overflow = "visible";
    body.style.paddingRight = 0;
  }
});
