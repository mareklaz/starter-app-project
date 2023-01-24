let backgroundgradient = document.querySelector(
  ".mouse-cursor-gradient-tracking"
);

backgroundgradient.onmousemove = function (e) {
  let rect = e.target.getBoundingClientRect();
  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;
  backgroundgradient.style.setProperty("--x", x + "px");
  backgroundgradient.style.setProperty("--y", y + "px");
};
