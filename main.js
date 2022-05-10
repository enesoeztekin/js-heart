var heart = document.querySelector("#heart");

setInterval(() => {
  heart.style.transform = "scale(1.2)";
}, 600);

setInterval(() => {
  heart.style.transform = "scale(1)";
}, 700);
