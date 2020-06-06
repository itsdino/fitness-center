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
const navBarConst = document.getElementById("navbar");
const logoConst = document.querySelector(".logo");
const menuLinksConst = document.querySelectorAll("#navbar ul li a");
let menuLinksLength = menuLinksConst.length;

// mobile
// ------
// closes mobile menu on item select
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", () => {
    setTimeout(uncheckHamburger, 150);
  });
}

var uncheckHamburger = () => {
  menuBtn.checked = false;
};

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
  navBarConst.classList.remove("top");
  logoConst.classList.add("shrinked");
  for (let i = 0; i < menuLinksLength; i++) {
    menuLinksConst[i].classList.add("shrinked");
  }
  console.log("shrink");
};

// resets default hero navbar, no shadow
const heroNavbar = () => {
  navBarConst.classList.add("top");
  logoConst.classList.remove("shrinked");
  for (let i = 0; i < menuLinksLength; i++) {
    menuLinksConst[i].classList.remove("shrinked");
  }
  console.log("hero");
};

// adds active class to menu item
const menuItemHighlightHandler = () => {
  let scrollPosition = window.scrollY;
  //home
  if (scrollPosition < 1329) {
    let active = document.querySelector(".active");
    if (active) {
      active.classList.remove("active");
    }
    menuLinksConst[0].classList.add("active");
  } else if (scrollPosition < 3156) {
    let active = document.querySelector(".active");
    if (active) {
      active.classList.remove("active");
    }
    menuLinksConst[1].classList.add("active");
  } else if (scrollPosition < 3955) {
    let active = document.querySelector(".active");
    if (active) {
      active.classList.remove("active");
    }
    menuLinksConst[2].classList.add("active");
  } else if (scrollPosition < 4887) {
    let active = document.querySelector(".active");
    if (active) {
      active.classList.remove("active");
    }
    menuLinksConst[3].classList.add("active");
  } else if (scrollPosition < 5777) {
    let active = document.querySelector(".active");
    if (active) {
      active.classList.remove("active");
    }
    menuLinksConst[4].classList.add("active");
  } else {
    let active = document.querySelector(".active");
    if (active) {
      active.classList.remove("active");
    }
    menuLinksConst[5].classList.add("active");
  }
  // contact menu item highlighter
  if (window.innerHeight + scrollPosition >= document.body.offsetHeight - 2) {
    let active = document.querySelector(".active");
    if (active) {
      active.classList.remove("active");
    }
    menuLinksConst[6].classList.add("active");
  }
};

// jquery smooth scroll to element
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
