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
      behavior: "smooth",
      inline: "center",
    });

    cards[current].classList.add("current");
  })
);

// change header background on scroll
const header = document.querySelector("header");
const navHeight = header.offsetHeight;

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
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

window.addEventListener("scroll", changeHeaderWhenScroll);

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
