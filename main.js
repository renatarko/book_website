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

window.addEventListener("scroll", changeHeaderWhenScroll);
