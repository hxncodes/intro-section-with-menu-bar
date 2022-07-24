menuBtn = document.querySelector("#menu-btn");
closeBtn = document.querySelector(".close-btn");
menu = document.querySelector("#menu");
overlay = document.querySelector("#overlay");

// show Sidebar
menuBtn.addEventListener("click", () => {
  menu.style.display = "block";
  overlay.classList.add("overlay");
});

// Hide Sidebar
closeBtn.addEventListener("click", () => {
  menu.style.display = "none";
  overlay.classList.remove("overlay");
});
