// initializes lax
window.onload = () => {
  lax.setup();
  const updateLax = () => {
    lax.update(window.scrollY);
    window.requestAnimationFrame(updateLax);
  };
  window.requestAnimationFrame(updateLax);
};
// parallax header
const headerImg = document.querySelector(".header-img");

// scroll to top button
const scrollTopBtn = document.getElementById("back-to-top");
const footer = document.getElementById("main-footer");

// for mobile navbar
const menuItemsConst = document.querySelectorAll(".menu-item");
const menuBtnConst = document.getElementById("menu-btn");

// for desktop navbar
const navBarConst = document.getElementById("navbar");
const logoConst = document.querySelector(".logo");
const menuLinksConst = document.querySelectorAll("#navbar ul li a");
let menuLinksLength = menuLinksConst.length;

// parallax header effect
window.addEventListener("scroll", function (e) {
  let scrolled = window.scrollY;
  headerImg.style.top = scrolled * 0.2 + "px";
});

// scroll to top button show/hide
const scrollToTopButtonHandler = () => {
  let scrollPosition = window.scrollY;
  if (scrollPosition > 1000) {
    scrollTopBtn.classList.remove("hidden");
  } else {
    scrollTopBtn.classList.add("hidden");
  }
};

// mobile
// ------

// closes mobile menu on item select
for (let i = 0; i < menuItemsConst.length; i++) {
  menuItemsConst[i].addEventListener("click", () => {
    setTimeout(uncheckHamburger, 150);
  });
}

const uncheckHamburger = () => {
  menuBtnConst.checked = false;
};

// desktop
// -------

// runs functions on scroll
window.onscroll = () => {
  navBarSizeHandler();
  menuItemHighlightHandler();
  scrollToTopButtonHandler();
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
};

// shrinks desktop navbar
const shrinkNavbar = () => {
  navBarConst.classList.remove("top");
  logoConst.classList.add("shrinked");
  for (let i = 0; i < menuLinksLength; i++) {
    menuLinksConst[i].classList.add("shrinked");
  }
};

// resets back to hero navbar
const heroNavbar = () => {
  navBarConst.classList.add("top");
  logoConst.classList.remove("shrinked");
  for (let i = 0; i < menuLinksLength; i++) {
    menuLinksConst[i].classList.remove("shrinked");
  }
};

// -------

// adds active class to menu item depending on scroll position
const menuItemHighlightHandler = () => {
  let scrollPosition = window.scrollY;
  if (scrollPosition < 1329) {
    // Willkommen
    getActiveMenuItem();
    menuLinksConst[0].classList.add("active");
  } else if (scrollPosition < 3156) {
    // Fitness
    getActiveMenuItem();
    menuLinksConst[1].classList.add("active");
  } else if (scrollPosition < 3955) {
    // Wellness
    getActiveMenuItem();
    menuLinksConst[2].classList.add("active");
  } else if (scrollPosition < 4887) {
    // Selbstverteidigung
    getActiveMenuItem();
    menuLinksConst[3].classList.add("active");
  } else if (scrollPosition < 5777) {
    // Team
    getActiveMenuItem();
    menuLinksConst[4].classList.add("active");
  } else {
    // Preise
    getActiveMenuItem();
    menuLinksConst[5].classList.add("active");
  }
  // contact menu item highlighter fix so it works on all resolutions
  if (
    scrollPosition > 7715 ||
    window.innerHeight + scrollPosition >= document.body.offsetHeight - 2
  ) {
    // Kontakt
    getActiveMenuItem();
    menuLinksConst[6].classList.add("active");
  }
};

// gets active menu item and removes active class
const getActiveMenuItem = () => {
  let active = document.querySelector(".active");
  if (active) {
    active.classList.remove("active");
  }
};

// jQuery smooth scroll to element
$("#navbar ul li a, .site-link").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();
    const hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 48,
      },
      450
    );
  }
});
