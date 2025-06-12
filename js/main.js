let textar = document.getElementById("textarea");
let span = document.getElementById("myspan");
let spantwo = document.querySelector(".note");

textar.oninput = function () {
  span.textContent = 50 - this.value.length;

  if (span.innerHTML == 0) {
    span.style.color = "#f00";
    spantwo.textContent = "You have finished the allowed number of words";
  } else {
    span.style.color = "#000";
    spantwo.textContent = "";
  }
};
