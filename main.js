const buttonControl = document.querySelectorAll(".btn-button");
const cards = document.querySelectorAll(".card");

const maxCard = cards.length;
let current = 0;

buttonControl.forEach((control) =>
  control.addEventListener("click", (e) => {
    const isRight = control.classList.contains("right");

    if (isRight) {
      current += 2;
    } else {
      current -= 2;
    }

    if (current >= maxCard) {
      current = 0;
    }

    if (current < 0) {
      current = maxCard - 1;
    }

    cards.forEach((card) => card.classList.remove("current"));

    cards[current].scrollIntoView({
      block: "nearest",
      inline: "center",
      behavior: "smooth",
    });

    console.log(cards[current], control);
    cards[current].classList.add("current");
  })
);

// change header background on scroll
const header = document.querySelector("header");
const navHeight = header.offsetHeight;

const circle = document.querySelector(".testimonials-circle");

function changeElementsWhenScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }

  if (window.scrollY >= 1700) {
    circle.classList.add("animation");
  } else {
    circle.classList.remove("animation");
  }
}

// swiper Testimonials
const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  slidesPerView: 0.85,
  loop: true,
  mousewheel: true,
  keyboard: true,

  navigation: {
    nextEl: ".swiper-button-next",
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});

window.addEventListener("scroll", changeElementsWhenScroll);

// menu mobile
const btnMobile = document.querySelector(".menu-mobile");

function toggleMenu() {
  const nav = document.querySelector(".menu-navigation");
  nav.classList.toggle("active");

  const links = document.querySelectorAll("nav ul li a");
  console.log(links);

  for (const link of links) {
    link.addEventListener("click", function () {
      nav.classList.remove("active");
    });
  }
}

btnMobile.addEventListener("click", toggleMenu);

// ScrollReveal
const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true,
});

scrollReveal.reveal(
  ".containerText, .container-btn, .text-container, .box-container, .text, .grid"
);
