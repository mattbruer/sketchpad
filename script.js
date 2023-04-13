let sky = document.querySelector('.top-half');

for (let i = 0; i < 1000; i++) {
  let dimension = `${Math.random() * 2}px`;
  const dotDiv = document.createElement('div');
  dotDiv.style.zIndex = '-1';
  dotDiv.style.width = dimension;
  dotDiv.style.height = dimension;
  dotDiv.style.backgroundColor = 'white';
  dotDiv.style.position = 'absolute';
  dotDiv.style.top = `${Math.random() * 100}%`;
  dotDiv.style.left = `${Math.random() * 100}%`;
  sky.appendChild(dotDiv);
}
