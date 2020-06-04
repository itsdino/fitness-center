// initializes lax
window.onload = () => {
  lax.setup();
  const updateLax = () => {
    lax.update(window.scrollY);
    window.requestAnimationFrame(updateLax);
  };
  window.requestAnimationFrame(updateLax);
};

// for mobile navbar
const menuItems = document.querySelectorAll(".menu-item");
const menuBtn = document.getElementById("menu-btn");

// for desktop navbar
const navbar = document.getElementById("navbar");
const logo = document.querySelector(".logo");
const menuLinks = document.querySelectorAll("#navbar ul li a");
let menuLinksLength = menuLinks.length;

// mobile
// ------
// closes mobile menu on item select
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", () => {
    menuBtn.checked = false;
  });
}

// desktop
// -------
window.onscroll = () => {
  navBarSizeHandler();
  menuItemHighlightHandler();
};

let scrolled = false;
const navBarSizeHandler = () => {
  if (window.scrollY > 25) {
    if (!scrolled) {
      shrinkNavbar();
      scrolled = true;
    }
  } else if (scrolled) {
    heroNavbar();
    scrolled = false;
  }
  console.log("navbarsizehandler");
};

// shrinks desktop navbar, adds shadow
const shrinkNavbar = () => {
  navbar.classList.remove("top");
  logo.classList.add("shrinked");
  for (let i = 0; i < menuLinksLength; i++) {
    menuLinks[i].classList.add("shrinked");
  }
  console.log("shrink");
};

// resets default hero navbar, no shadow
const heroNavbar = () => {
  navbar.classList.add("top");
  logo.classList.remove("shrinked");
  for (let i = 0; i < menuLinksLength; i++) {
    menuLinks[i].classList.remove("shrinked");
  }
  console.log("hero");
};

// adds active class to menu item
const menuItemHighlightHandler = () => {
  console.log("highlight handler");
  let scrollPosition = window.scrollY;
  if (scrollPosition >= 0 && scrollPosition < 1478) {
    let active = document.querySelector(".active");
    if (active) {
      active.classList.remove("active");
    }
    menuLinks[0].classList.add("active");
  } else if (scrollPosition >= 1478 && scrollPosition < 3216) {
    let active = document.querySelector(".active");
    if (active) {
      active.classList.remove("active");
    }
    menuLinks[1].classList.add("active");
  } else if (scrollPosition >= 3216 && scrollPosition < 4217) {
    let active = document.querySelector(".active");
    if (active) {
      active.classList.remove("active");
    }
    menuLinks[2].classList.add("active");
  } else if (scrollPosition >= 4217 && scrollPosition < 5117) {
    let active = document.querySelector(".active");
    if (active) {
      active.classList.remove("active");
    }
    menuLinks[3].classList.add("active");
  }
  console.log(scrollPosition);
};
