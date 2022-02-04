const mouseCursor = document.querySelector(".cursor");
const navLinks = document.querySelectorAll(".nav-links li");

window.addEventListener("mousemove", cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}

navLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
    link.classList.add("hovered-link");
  });
  link.addEventListener("mouseout", () => {
    mouseCursor.classList.remove("link-grow");
    link.classList.remove("hovered-link");
  });
});
