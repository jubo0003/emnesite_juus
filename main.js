const summaries = document.querySelector(".summaries1");

if (summaries) {
  summaries.addEventListener("click", (e) => {
    console.log(e.target);
    const allDetails = Array.from(e.currentTarget.querySelectorAll("details"));
    const clickedDetails = e.target.closest("details");
    allDetails
      .filter((detail) => detail !== clickedDetails)
      .forEach((remainigDetail) => {
        remainigDetail.removeAttribute("open");
      });
  });
}

const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");

burger.addEventListener("click", burgerClick);

function burgerClick() {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
}

const submenuButton = document.querySelector(".submenu-button");
const submenus = document.querySelector(".submenus");
if (submenuButton) {
  submenuButton.addEventListener("click", (e) => {
    submenus.classList.toggle("active");
  });
}
