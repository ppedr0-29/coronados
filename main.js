let menu = document.querySelector("#icono-menu")
let navbar = document.querySelector(".navbar")

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
}


