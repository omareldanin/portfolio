let navButtons = Array.from(document.querySelectorAll(".navbar button"));
let sections = Array.from(document.querySelectorAll("section"));
let loadingCover = document.querySelector(".loading-cover");

const onNavigate = (e) => {
  let activeButton = document.querySelector(".navbar .active");

  if (e.currentTarget.dataset.target !== activeButton.dataset.target) {
    navButtons.forEach((button) => button.classList.remove("active"));
    sections.forEach((section) => section.classList.remove("active"));

    loadingCover.classList.add("showLoading");

    setTimeout(() => {
      loadingCover.classList.remove("showLoading");
    }, 490);

    e.currentTarget.classList.add("active");

    window.scrollTo(0, 0);

    let target = sections.find(
      (section) => section.id === e.currentTarget.dataset.target
    );
    target.classList.add("active");
  }
};

const navigateToAbout = () => {
  navButtons.forEach((button) => button.classList.remove("active"));
  sections.forEach((section) => section.classList.remove("active"));
  loadingCover.classList.add("showLoading");

  navButtons
    .find((button) => button.dataset.target === "about")
    .classList.add("active");

  window.scrollTo(0, 0);

  let target = sections.find((section) => section.id === "about");
  target.classList.add("active");
};

navButtons.forEach((button) => button.addEventListener("click", onNavigate));
