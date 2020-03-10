// Scroll Spy

window.addEventListener("scroll", () => {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

var toggle = document.querySelector(".toggle");
var toggle2 = document.querySelectorAll(".act");

toggle.addEventListener("click", () => {
  var header = document.querySelector("header");
  header.classList.toggle("activee");
  console.log(toggle2);
});

toggle2.forEach(item => {
  item.addEventListener("click", () => {
    var header = document.querySelector("header");
    header.classList.toggle("activee");
  });
});
