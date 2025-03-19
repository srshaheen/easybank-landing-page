const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");

const navBar = document.querySelector("nav");

openBtn.addEventListener("click", () => {
  navBar.classList.add("transform");
  closeBtn.style.display = "block";
  openBtn.style.display = "none";
});

closeBtn.addEventListener("click", () => {
  navBar.classList.remove("transform");
  openBtn.style.display = "block";
  closeBtn.style.display = "none";
});
