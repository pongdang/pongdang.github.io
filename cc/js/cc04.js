const headerBarBtn = document.querySelector(".header-menu-btn");
const menu = document.querySelector(".header-menu-container");
const icon = document.querySelector(".header-icon");
headerBarBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  icon.classList.toggle("active");
});
