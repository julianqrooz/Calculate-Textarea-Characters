let textar = document.getElementById("textarea");
let span = document.getElementById("myspan");
let spantwo = document.querySelector(".note");

textar.onkeyup = function () {
  span.textContent = 50 - this.value.length;

  if (span.textContent < 0) {
    span.style.color = "#f00";
    spantwo.textContent = "You have exceeded the word limit";
  } else {
    span.style.color = "#000";
    spantwo.textContent = "";
  }
};
