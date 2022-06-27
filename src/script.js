const container = document.querySelector('.container'),
  colorArr = ['red', 'blue', 'green', 'yellow'];

const COUNT_SQUARE = 500;

for (let i = 0; i < COUNT_SQUARE; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', setColor);
  square.addEventListener('mouseleave', removeColor);

  container.append(square);
}

function setColor(event) {
  const target = event.target,
    color = getColor();

  target.style.background = color;
  target.style.boxShadow = `0 0 2px ${color}`;
}

function removeColor(event) {
  event.target.style = '';
}

function getColor() {
  const index = Math.floor(Math.random() * colorArr.length);
  return colorArr[index];
}
