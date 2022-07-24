menuBtn = document.querySelector("#menu-btn");
closeBtn = document.querySelector(".close-btn");
menu = document.querySelector("#menu");
container = document.querySelector(".container");

// show Sidebar
menuBtn.addEventListener("click", () => {
  menu.style.display = "block";
  document.body.classList.add("overlay");
});

// Hide Sidebar
closeBtn.addEventListener("click", () => {
  menu.style.display = "none";
  document.body.classList.remove("overlay");
});
