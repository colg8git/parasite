function createLine() {
  const line = document.createElement('div');
  line.classList.add('line');
  line.style.color = getRandomColor();
  line.style.left = Math.floor(Math.random() * -100) + '%';
  line.style.top = `${Math.floor(Math.random() * 100)}px`;
  line.style.animationDuration = `${Math.floor(Math.random() * 5) + 2}s`;
  line.textContent = 'wen wl?';
  document.querySelector('.lines').appendChild(line);
  const interval = setInterval(function() {
    const pos = parseFloat(line.style.left);
    if (pos > 100) {
      clearInterval(interval);
      line.remove();
    } else {
      line.style.left = pos + 0.3 + '%';
    }
  }, 20);
}

function getRandomColor() {
  const grayValue = Math.floor(Math.random() * 256);
  const alphaValue = Math.floor(Math.random() * 101) / 100;
  return `rgba(${grayValue}, ${grayValue}, ${grayValue}, ${alphaValue})`;
}

setInterval(function() {
  createLine();
}, 100);
