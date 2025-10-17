const summaries = document.querySelector(".summaries1");

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

let menuBurger = document.querySelector(".burger");

menuBurger.addEventListener("click", function (event) {
  // event.target = hvad der er blevet klikket på
  // event.currentTarget = hvad event listeneren original er bundet op på (.burger)
});
