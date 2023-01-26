const backgroundgradient = document.querySelector(
  '.mouse-cursor-gradient-tracking'
);

backgroundgradient.onmousemove = function (e) {
  const rect = e.target.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  backgroundgradient.style.setProperty('--x', x + 'px');
  backgroundgradient.style.setProperty('--y', y + 'px');
};
