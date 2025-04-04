const panels = document.querySelectorAll(".panel");
console.log("test");

function toggleOpen() {
  console.log("hola");
  this.classList.toggle("open");
}

panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
